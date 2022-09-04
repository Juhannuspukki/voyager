import React from "react";
import { Graticule, NaturalEarth } from "@visx/geo";
import * as topojson from "topojson-client";
import topology from "./../topology.json";
import { CountryData } from "../pages";
import { geoCentroid } from "d3-geo";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { Point } from "@visx/point";
import { Group } from "@visx/group";

export const background = "#f9f7e8";

export type GeoMercatorProps = {
  width: number;
  height: number;
  events?: boolean;
  countries: CountryData[];
};

interface FeatureShape {
  type: "Feature";
  id: string;
  geometry: { coordinates: [number, number][][]; type: "Polygon" };
  properties: { name: string };
}

// @ts-ignore
const world = topojson.feature(topology, topology.objects.units) as {
  type: "FeatureCollection";
  features: FeatureShape[];
};

const Map = ({ width, height, countries }: GeoMercatorProps) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width / 630) * 100;

  // TOOLTIP CRAP
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    scroll: true,
  });

  const handleMouseOver = (
    event: React.MouseEvent<SVGGElement, MouseEvent>,
    datum: CountryData
  ) => {
    const coords: Point | null = localPoint(
      event.currentTarget.ownerSVGElement!,
      event
    );

    console.log(datum);

    if (!datum) {
      return;
    }

    const { contentSnippet, date, name, status } = datum;

    coords &&
      showTooltip({
        tooltipLeft: coords.x,
        tooltipTop: coords.y,
        tooltipData: {
          name: name,
          date: date,
          status: status,
          contentSnippet: contentSnippet,
        },
      });
  };

  // END OF TOOLTIP CRAP

  const color = (feature: FeatureShape) => {
    if (feature.id === "FIN") {
      return "#1d4877";
    }

    const countryData = countries.find(
      (country) => country.code === feature.id
    );

    if (!countryData) {
      return "#aaaaaa";
    }

    switch (countryData.status) {
      case 1:
        return "#1d4877";
      case 2:
        return "#1b8a5a";
      case 3:
        return "#fbb021";
      case 4:
        return "#f68838";
      case 5:
        return "#ee3e32";
    }
  };

  const stylesObj = {
    fill: "#000",
    fontFamily: "sans-serif",
    cursor: "default",
  };

  return width < 10 ? null : (
    <svg width={width} height={height} ref={containerRef}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={background}
        rx={14}
      />
      <NaturalEarth<FeatureShape>
        data={world.features}
        scale={scale}
        translate={[centerX, centerY + 50]}
      >
        {(mercator) => (
          <g>
            <Graticule
              graticule={(g) => mercator.path(g) || ""}
              stroke="rgba(33,33,33,0.05)"
            />
            {mercator.features.map(({ feature, path, projection }, i) => {
              const coords: [number, number] | null = projection(
                geoCentroid(feature)
              );

              const countryData = countries.find(
                (country) => country.code === feature.id
              );
              return (
                <Group
                  key={`map-feature-${i}`}
                  onMouseOver={(e) =>
                    countryData && handleMouseOver(e, countryData)
                  }
                  onMouseOut={hideTooltip}
                >
                  <path
                    d={path || ""}
                    fill={color(feature)}
                    stroke={background}
                    strokeWidth={0.5}
                    onClick={() => {
                      console.log(countryData);
                    }}
                  />
                  <text
                    transform={`translate(${coords})`}
                    fontSize={Math.max(width / 125, 5)}
                    style={stylesObj}
                    textAnchor="middle"
                  >
                    {countryData ? countryData.code : ""}
                  </text>
                </Group>
              );
            })}
          </g>
        )}
      </NaturalEarth>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          // set this to random so it correctly updates with parent bounds
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
        >
          {
            //@ts-ignore
            tooltipData.name ? (
              <div style={{ maxWidth: 200 }}>
                <strong>
                  {
                    //@ts-ignore
                    tooltipData.name
                  }
                </strong>
                <br />
                <small>
                  {
                    //@ts-ignore
                    tooltipData.contentSnippet
                  }
                </small>
              </div>
            ) : (
              "Ei tietoja."
            )
          }
        </TooltipInPortal>
      )}
    </svg>
  );
};

export default Map;
