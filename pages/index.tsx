import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";
import Parser from "rss-parser";
import { JSDOM } from "jsdom";
import statusCodes from "../constants/statusCodes";
import countryCodes from "../constants/countryCodes";
import { ParentSize } from "@visx/responsive";

export type CountryData = {
  date: string;
  status: number;
  code: string;
  name: string;
  contentSnippet: string;
  link: string;
};

const Home = (props: { countries: CountryData[] }) => {
  const { countries } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Matkustustiedotteet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ParentSize>
          {(parent) => (
            <Map
              width={parent.width}
              height={parent.height}
              countries={countries}
            />
          )}
        </ParentSize>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  let parser = new Parser();

  const countries: CountryData[] = [];

  try {
    const feed = await parser.parseURL(
      "https://um.fi/o/rss?dctype=matkustustiedotteet&lang=fi"
    );

    feed.items.forEach((item) => {
      const { isoDate, link, contentSnippet, title, guid } = item;

      const statusBlock = new JSDOM(
        item["content:encoded"]
      ).window.document.getElementById("safetyLevelMainLevel");
      if (!statusBlock) {
        console.error(`Could not determine country status`);
        return;
      }
      const statusName = statusBlock.getElementsByTagName("p")[0].textContent;

      const isValid = item && guid && title && isoDate && link && statusName;
      if (!isValid) {
        console.error(`A required field is missing from the RSS.`);
        return;
      }

      let level = statusCodes(statusName);
      const alpha2CountryCode = guid.split("/").pop();

      const country = countryCodes.find(
        (element) => element["alpha-2"] === alpha2CountryCode
      );

      if (!country || !isValid) {
        console.error(
          `Country code ${alpha2CountryCode} not found in database!`
        );
        // This is equivalent to "continue"
        return;
      }

      const alpha3 = country["alpha-3"];

      const countryData: CountryData = {
        date: isoDate,
        name: title.substring(0, title.lastIndexOf(":")),
        link: link,
        status: level,
        code: alpha3,
        contentSnippet: contentSnippet ? contentSnippet : "",
      };

      countries.push(countryData);
    });
  } catch (e) {
    return console.error("A backend error has occured.");
  }

  return {
    props: {
      countries,
    },
    revalidate: 86400,
  };
}

export default Home;
