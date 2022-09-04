const countryCodes = [
  {
    "alpha-2": "AF",
    "alpha-3": "AFG",
    name: "Afghanistan",
  },
  {
    "alpha-2": "AX",
    "alpha-3": "ALA",
    name: "Åland Islands",
  },
  {
    "alpha-2": "AL",
    "alpha-3": "ALB",
    name: "Albania",
  },
  {
    "alpha-2": "DZ",
    "alpha-3": "DZA",
    name: "Algeria",
  },
  {
    "alpha-2": "AS",
    "alpha-3": "ASM",
    name: "American Samoa",
  },
  {
    "alpha-2": "AD",
    "alpha-3": "AND",
    name: "Andorra",
  },
  {
    "alpha-2": "AO",
    "alpha-3": "AGO",
    name: "Angola",
  },
  {
    "alpha-2": "AI",
    "alpha-3": "AIA",
    name: "Anguilla",
  },
  {
    "alpha-2": "AQ",
    "alpha-3": "ATA",
    name: "Antarctica",
  },
  {
    "alpha-2": "AG",
    "alpha-3": "ATG",
    name: "Antigua and Barbuda",
  },
  {
    "alpha-2": "AR",
    "alpha-3": "ARG",
    name: "Argentina",
  },
  {
    "alpha-2": "AM",
    "alpha-3": "ARM",
    name: "Armenia",
  },
  {
    "alpha-2": "AW",
    "alpha-3": "ABW",
    name: "Aruba",
  },
  {
    "alpha-2": "AU",
    "alpha-3": "AUS",
    name: "Australia",
  },
  {
    "alpha-2": "AT",
    "alpha-3": "AUT",
    name: "Austria",
  },
  {
    "alpha-2": "AZ",
    "alpha-3": "AZE",
    name: "Azerbaijan",
  },
  {
    "alpha-2": "BS",
    "alpha-3": "BHS",
    name: "Bahamas",
  },
  {
    "alpha-2": "BH",
    "alpha-3": "BHR",
    name: "Bahrain",
  },
  {
    "alpha-2": "BD",
    "alpha-3": "BGD",
    name: "Bangladesh",
  },
  {
    "alpha-2": "BB",
    "alpha-3": "BRB",
    name: "Barbados",
  },
  {
    "alpha-2": "BY",
    "alpha-3": "BLR",
    name: "Belarus",
  },
  {
    "alpha-2": "BE",
    "alpha-3": "BEL",
    name: "Belgium",
  },
  {
    "alpha-2": "BZ",
    "alpha-3": "BLZ",
    name: "Belize",
  },
  {
    "alpha-2": "BJ",
    "alpha-3": "BEN",
    name: "Benin",
  },
  {
    "alpha-2": "BM",
    "alpha-3": "BMU",
    name: "Bermuda",
  },
  {
    "alpha-2": "BT",
    "alpha-3": "BTN",
    name: "Bhutan",
  },
  {
    "alpha-2": "BO",
    "alpha-3": "BOL",
    name: "Bolivia (Plurinational State of)",
  },
  {
    "alpha-2": "BQ",
    "alpha-3": "BES",
    name: "Bonaire, Sint Eustatius and Saba",
  },
  {
    "alpha-2": "BA",
    "alpha-3": "BIH",
    name: "Bosnia and Herzegovina",
  },
  {
    "alpha-2": "BW",
    "alpha-3": "BWA",
    name: "Botswana",
  },
  {
    "alpha-2": "BV",
    "alpha-3": "BVT",
    name: "Bouvet Island",
  },
  {
    "alpha-2": "BR",
    "alpha-3": "BRA",
    name: "Brazil",
  },
  {
    "alpha-2": "IO",
    "alpha-3": "IOT",
    name: "British Indian Ocean Territory",
  },
  {
    "alpha-2": "BN",
    "alpha-3": "BRN",
    name: "Brunei Darussalam",
  },
  {
    "alpha-2": "BG",
    "alpha-3": "BGR",
    name: "Bulgaria",
  },
  {
    "alpha-2": "BF",
    "alpha-3": "BFA",
    name: "Burkina Faso",
  },
  {
    "alpha-2": "BI",
    "alpha-3": "BDI",
    name: "Burundi",
  },
  {
    "alpha-2": "CV",
    "alpha-3": "CPV",
    name: "Cabo Verde",
  },
  {
    "alpha-2": "KH",
    "alpha-3": "KHM",
    name: "Cambodia",
  },
  {
    "alpha-2": "CM",
    "alpha-3": "CMR",
    name: "Cameroon",
  },
  {
    "alpha-2": "CA",
    "alpha-3": "CAN",
    name: "Canada",
  },
  {
    "alpha-2": "KY",
    "alpha-3": "CYM",
    name: "Cayman Islands",
  },
  {
    "alpha-2": "CF",
    "alpha-3": "CAF",
    name: "Central African Republic",
  },
  {
    "alpha-2": "TD",
    "alpha-3": "TCD",
    name: "Chad",
  },
  {
    "alpha-2": "CL",
    "alpha-3": "CHL",
    name: "Chile",
  },
  {
    "alpha-2": "CN",
    "alpha-3": "CHN",
    name: "China",
  },
  {
    "alpha-2": "CX",
    "alpha-3": "CXR",
    name: "Christmas Island",
  },
  {
    "alpha-2": "CC",
    "alpha-3": "CCK",
    name: "Cocos (Keeling) Islands",
  },
  {
    "alpha-2": "CO",
    "alpha-3": "COL",
    name: "Colombia",
  },
  {
    "alpha-2": "KM",
    "alpha-3": "COM",
    name: "Comoros",
  },
  {
    "alpha-2": "CG",
    "alpha-3": "COG",
    name: "Congo",
  },
  {
    "alpha-2": "CD",
    "alpha-3": "COD",
    name: "Congo, Democratic Republic of the",
  },
  {
    "alpha-2": "CK",
    "alpha-3": "COK",
    name: "Cook Islands",
  },
  {
    "alpha-2": "CR",
    "alpha-3": "CRI",
    name: "Costa Rica",
  },
  {
    "alpha-2": "CI",
    "alpha-3": "CIV",
    name: "Côte d'Ivoire",
  },
  {
    "alpha-2": "HR",
    "alpha-3": "HRV",
    name: "Croatia",
  },
  {
    "alpha-2": "CU",
    "alpha-3": "CUB",
    name: "Cuba",
  },
  {
    "alpha-2": "CW",
    "alpha-3": "CUW",
    name: "Curaçao",
  },
  {
    "alpha-2": "CY",
    "alpha-3": "CYP",
    name: "Cyprus",
  },
  {
    "alpha-2": "CZ",
    "alpha-3": "CZE",
    name: "Czechia",
  },
  {
    "alpha-2": "DK",
    "alpha-3": "DNK",
    name: "Denmark",
  },
  {
    "alpha-2": "DJ",
    "alpha-3": "DJI",
    name: "Djibouti",
  },
  {
    "alpha-2": "DM",
    "alpha-3": "DMA",
    name: "Dominica",
  },
  {
    "alpha-2": "DO",
    "alpha-3": "DOM",
    name: "Dominican Republic",
  },
  {
    "alpha-2": "EC",
    "alpha-3": "ECU",
    name: "Ecuador",
  },
  {
    "alpha-2": "EG",
    "alpha-3": "EGY",
    name: "Egypt",
  },
  {
    "alpha-2": "SV",
    "alpha-3": "SLV",
    name: "El Salvador",
  },
  {
    "alpha-2": "GQ",
    "alpha-3": "GNQ",
    name: "Equatorial Guinea",
  },
  {
    "alpha-2": "ER",
    "alpha-3": "ERI",
    name: "Eritrea",
  },
  {
    "alpha-2": "EE",
    "alpha-3": "EST",
    name: "Estonia",
  },
  {
    "alpha-2": "SZ",
    "alpha-3": "SWZ",
    name: "Eswatini",
  },
  {
    "alpha-2": "ET",
    "alpha-3": "ETH",
    name: "Ethiopia",
  },
  {
    "alpha-2": "FK",
    "alpha-3": "FLK",
    name: "Falkland Islands (Malvinas)",
  },
  {
    "alpha-2": "FO",
    "alpha-3": "FRO",
    name: "Faroe Islands",
  },
  {
    "alpha-2": "FJ",
    "alpha-3": "FJI",
    name: "Fiji",
  },
  {
    "alpha-2": "FI",
    "alpha-3": "FIN",
    name: "Finland",
  },
  {
    "alpha-2": "FR",
    "alpha-3": "FRA",
    name: "France",
  },
  {
    "alpha-2": "GF",
    "alpha-3": "GUF",
    name: "French Guiana",
  },
  {
    "alpha-2": "PF",
    "alpha-3": "PYF",
    name: "French Polynesia",
  },
  {
    "alpha-2": "TF",
    "alpha-3": "ATF",
    name: "French Southern Territories",
  },
  {
    "alpha-2": "GA",
    "alpha-3": "GAB",
    name: "Gabon",
  },
  {
    "alpha-2": "GM",
    "alpha-3": "GMB",
    name: "Gambia",
  },
  {
    "alpha-2": "GE",
    "alpha-3": "GEO",
    name: "Georgia",
  },
  {
    "alpha-2": "DE",
    "alpha-3": "DEU",
    name: "Germany",
  },
  {
    "alpha-2": "GH",
    "alpha-3": "GHA",
    name: "Ghana",
  },
  {
    "alpha-2": "GI",
    "alpha-3": "GIB",
    name: "Gibraltar",
  },
  {
    "alpha-2": "GR",
    "alpha-3": "GRC",
    name: "Greece",
  },
  {
    "alpha-2": "GL",
    "alpha-3": "GRL",
    name: "Greenland",
  },
  {
    "alpha-2": "GD",
    "alpha-3": "GRD",
    name: "Grenada",
  },
  {
    "alpha-2": "GP",
    "alpha-3": "GLP",
    name: "Guadeloupe",
  },
  {
    "alpha-2": "GU",
    "alpha-3": "GUM",
    name: "Guam",
  },
  {
    "alpha-2": "GT",
    "alpha-3": "GTM",
    name: "Guatemala",
  },
  {
    "alpha-2": "GG",
    "alpha-3": "GGY",
    name: "Guernsey",
  },
  {
    "alpha-2": "GN",
    "alpha-3": "GIN",
    name: "Guinea",
  },
  {
    "alpha-2": "GW",
    "alpha-3": "GNB",
    name: "Guinea-Bissau",
  },
  {
    "alpha-2": "GY",
    "alpha-3": "GUY",
    name: "Guyana",
  },
  {
    "alpha-2": "HT",
    "alpha-3": "HTI",
    name: "Haiti",
  },
  {
    "alpha-2": "HM",
    "alpha-3": "HMD",
    name: "Heard Island and McDonald Islands",
  },
  {
    "alpha-2": "VA",
    "alpha-3": "VAT",
    name: "Holy See",
  },
  {
    "alpha-2": "HN",
    "alpha-3": "HND",
    name: "Honduras",
  },
  {
    "alpha-2": "HK",
    "alpha-3": "HKG",
    name: "Hong Kong",
  },
  {
    "alpha-2": "HU",
    "alpha-3": "HUN",
    name: "Hungary",
  },
  {
    "alpha-2": "IS",
    "alpha-3": "ISL",
    name: "Iceland",
  },
  {
    "alpha-2": "IN",
    "alpha-3": "IND",
    name: "India",
  },
  {
    "alpha-2": "ID",
    "alpha-3": "IDN",
    name: "Indonesia",
  },
  {
    "alpha-2": "IR",
    "alpha-3": "IRN",
    name: "Iran (Islamic Republic of)",
  },
  {
    "alpha-2": "IQ",
    "alpha-3": "IRQ",
    name: "Iraq",
  },
  {
    "alpha-2": "IE",
    "alpha-3": "IRL",
    name: "Ireland",
  },
  {
    "alpha-2": "IM",
    "alpha-3": "IMN",
    name: "Isle of Man",
  },
  {
    "alpha-2": "IL",
    "alpha-3": "ISR",
    name: "Israel",
  },
  {
    "alpha-2": "IT",
    "alpha-3": "ITA",
    name: "Italy",
  },
  {
    "alpha-2": "JM",
    "alpha-3": "JAM",
    name: "Jamaica",
  },
  {
    "alpha-2": "JP",
    "alpha-3": "JPN",
    name: "Japan",
  },
  {
    "alpha-2": "JE",
    "alpha-3": "JEY",
    name: "Jersey",
  },
  {
    "alpha-2": "JO",
    "alpha-3": "JOR",
    name: "Jordan",
  },
  {
    "alpha-2": "KZ",
    "alpha-3": "KAZ",
    name: "Kazakhstan",
  },
  {
    "alpha-2": "KE",
    "alpha-3": "KEN",
    name: "Kenya",
  },
  {
    "alpha-2": "KI",
    "alpha-3": "KIR",
    name: "Kiribati",
  },
  {
    "alpha-2": "KP",
    "alpha-3": "PRK",
    name: "Korea (Democratic People's Republic of)",
  },
  {
    "alpha-2": "KR",
    "alpha-3": "KOR",
    name: "Korea, Republic of",
  },
  {
    "alpha-2": "KW",
    "alpha-3": "KWT",
    name: "Kuwait",
  },
  {
    "alpha-2": "KG",
    "alpha-3": "KGZ",
    name: "Kyrgyzstan",
  },
  {
    "alpha-2": "LA",
    "alpha-3": "LAO",
    name: "Lao People's Democratic Republic",
  },
  {
    "alpha-2": "LV",
    "alpha-3": "LVA",
    name: "Latvia",
  },
  {
    "alpha-2": "LB",
    "alpha-3": "LBN",
    name: "Lebanon",
  },
  {
    "alpha-2": "LS",
    "alpha-3": "LSO",
    name: "Lesotho",
  },
  {
    "alpha-2": "LR",
    "alpha-3": "LBR",
    name: "Liberia",
  },
  {
    "alpha-2": "LY",
    "alpha-3": "LBY",
    name: "Libya",
  },
  {
    "alpha-2": "LI",
    "alpha-3": "LIE",
    name: "Liechtenstein",
  },
  {
    "alpha-2": "LT",
    "alpha-3": "LTU",
    name: "Lithuania",
  },
  {
    "alpha-2": "LU",
    "alpha-3": "LUX",
    name: "Luxembourg",
  },
  {
    "alpha-2": "MO",
    "alpha-3": "MAC",
    name: "Macao",
  },
  {
    "alpha-2": "MG",
    "alpha-3": "MDG",
    name: "Madagascar",
  },
  {
    "alpha-2": "MW",
    "alpha-3": "MWI",
    name: "Malawi",
  },
  {
    "alpha-2": "MY",
    "alpha-3": "MYS",
    name: "Malaysia",
  },
  {
    "alpha-2": "MV",
    "alpha-3": "MDV",
    name: "Maldives",
  },
  {
    "alpha-2": "ML",
    "alpha-3": "MLI",
    name: "Mali",
  },
  {
    "alpha-2": "MT",
    "alpha-3": "MLT",
    name: "Malta",
  },
  {
    "alpha-2": "MH",
    "alpha-3": "MHL",
    name: "Marshall Islands",
  },
  {
    "alpha-2": "MQ",
    "alpha-3": "MTQ",
    name: "Martinique",
  },
  {
    "alpha-2": "MR",
    "alpha-3": "MRT",
    name: "Mauritania",
  },
  {
    "alpha-2": "MU",
    "alpha-3": "MUS",
    name: "Mauritius",
  },
  {
    "alpha-2": "YT",
    "alpha-3": "MYT",
    name: "Mayotte",
  },
  {
    "alpha-2": "MX",
    "alpha-3": "MEX",
    name: "Mexico",
  },
  {
    "alpha-2": "FM",
    "alpha-3": "FSM",
    name: "Micronesia (Federated States of)",
  },
  {
    "alpha-2": "MD",
    "alpha-3": "MDA",
    name: "Moldova, Republic of",
  },
  {
    "alpha-2": "MC",
    "alpha-3": "MCO",
    name: "Monaco",
  },
  {
    "alpha-2": "MN",
    "alpha-3": "MNG",
    name: "Mongolia",
  },
  {
    "alpha-2": "ME",
    "alpha-3": "MNE",
    name: "Montenegro",
  },
  {
    "alpha-2": "MS",
    "alpha-3": "MSR",
    name: "Montserrat",
  },
  {
    "alpha-2": "MA",
    "alpha-3": "MAR",
    name: "Morocco",
  },
  {
    "alpha-2": "MZ",
    "alpha-3": "MOZ",
    name: "Mozambique",
  },
  {
    "alpha-2": "MM",
    "alpha-3": "MMR",
    name: "Myanmar",
  },
  {
    "alpha-2": "NA",
    "alpha-3": "NAM",
    name: "Namibia",
  },
  {
    "alpha-2": "NR",
    "alpha-3": "NRU",
    name: "Nauru",
  },
  {
    "alpha-2": "NP",
    "alpha-3": "NPL",
    name: "Nepal",
  },
  {
    "alpha-2": "NL",
    "alpha-3": "NLD",
    name: "Netherlands",
  },
  {
    "alpha-2": "NC",
    "alpha-3": "NCL",
    name: "New Caledonia",
  },
  {
    "alpha-2": "NZ",
    "alpha-3": "NZL",
    name: "New Zealand",
  },
  {
    "alpha-2": "NI",
    "alpha-3": "NIC",
    name: "Nicaragua",
  },
  {
    "alpha-2": "NE",
    "alpha-3": "NER",
    name: "Niger",
  },
  {
    "alpha-2": "NG",
    "alpha-3": "NGA",
    name: "Nigeria",
  },
  {
    "alpha-2": "NU",
    "alpha-3": "NIU",
    name: "Niue",
  },
  {
    "alpha-2": "NF",
    "alpha-3": "NFK",
    name: "Norfolk Island",
  },
  {
    "alpha-2": "MK",
    "alpha-3": "MKD",
    name: "North Macedonia",
  },
  {
    "alpha-2": "MP",
    "alpha-3": "MNP",
    name: "Northern Mariana Islands",
  },
  {
    "alpha-2": "NO",
    "alpha-3": "NOR",
    name: "Norway",
  },
  {
    "alpha-2": "OM",
    "alpha-3": "OMN",
    name: "Oman",
  },
  {
    "alpha-2": "PK",
    "alpha-3": "PAK",
    name: "Pakistan",
  },
  {
    "alpha-2": "PW",
    "alpha-3": "PLW",
    name: "Palau",
  },
  {
    "alpha-2": "PS",
    "alpha-3": "PSE",
    name: "Palestine, State of",
  },
  {
    "alpha-2": "PA",
    "alpha-3": "PAN",
    name: "Panama",
  },
  {
    "alpha-2": "PG",
    "alpha-3": "PNG",
    name: "Papua New Guinea",
  },
  {
    "alpha-2": "PY",
    "alpha-3": "PRY",
    name: "Paraguay",
  },
  {
    "alpha-2": "PE",
    "alpha-3": "PER",
    name: "Peru",
  },
  {
    "alpha-2": "PH",
    "alpha-3": "PHL",
    name: "Philippines",
  },
  {
    "alpha-2": "PN",
    "alpha-3": "PCN",
    name: "Pitcairn",
  },
  {
    "alpha-2": "PL",
    "alpha-3": "POL",
    name: "Poland",
  },
  {
    "alpha-2": "PT",
    "alpha-3": "PRT",
    name: "Portugal",
  },
  {
    "alpha-2": "PR",
    "alpha-3": "PRI",
    name: "Puerto Rico",
  },
  {
    "alpha-2": "QA",
    "alpha-3": "QAT",
    name: "Qatar",
  },
  {
    "alpha-2": "RE",
    "alpha-3": "REU",
    name: "Réunion",
  },
  {
    "alpha-2": "RO",
    "alpha-3": "ROU",
    name: "Romania",
  },
  {
    "alpha-2": "RU",
    "alpha-3": "RUS",
    name: "Russian Federation",
  },
  {
    "alpha-2": "RW",
    "alpha-3": "RWA",
    name: "Rwanda",
  },
  {
    "alpha-2": "BL",
    "alpha-3": "BLM",
    name: "Saint Barthélemy",
  },
  {
    "alpha-2": "SH",
    "alpha-3": "SHN",
    name: "Saint Helena, Ascension and Tristan da Cunha",
  },
  {
    "alpha-2": "KN",
    "alpha-3": "KNA",
    name: "Saint Kitts and Nevis",
  },
  {
    "alpha-2": "LC",
    "alpha-3": "LCA",
    name: "Saint Lucia",
  },
  {
    "alpha-2": "MF",
    "alpha-3": "MAF",
    name: "Saint Martin (French part)",
  },
  {
    "alpha-2": "PM",
    "alpha-3": "SPM",
    name: "Saint Pierre and Miquelon",
  },
  {
    "alpha-2": "VC",
    "alpha-3": "VCT",
    name: "Saint Vincent and the Grenadines",
  },
  {
    "alpha-2": "WS",
    "alpha-3": "WSM",
    name: "Samoa",
  },
  {
    "alpha-2": "SM",
    "alpha-3": "SMR",
    name: "San Marino",
  },
  {
    "alpha-2": "ST",
    "alpha-3": "STP",
    name: "Sao Tome and Principe",
  },
  {
    "alpha-2": "SA",
    "alpha-3": "SAU",
    name: "Saudi Arabia",
  },
  {
    "alpha-2": "SN",
    "alpha-3": "SEN",
    name: "Senegal",
  },
  {
    "alpha-2": "RS",
    "alpha-3": "SRB",
    name: "Serbia",
  },
  {
    "alpha-2": "SC",
    "alpha-3": "SYC",
    name: "Seychelles",
  },
  {
    "alpha-2": "SL",
    "alpha-3": "SLE",
    name: "Sierra Leone",
  },
  {
    "alpha-2": "SG",
    "alpha-3": "SGP",
    name: "Singapore",
  },
  {
    "alpha-2": "SX",
    "alpha-3": "SXM",
    name: "Sint Maarten (Dutch part)",
  },
  {
    "alpha-2": "SK",
    "alpha-3": "SVK",
    name: "Slovakia",
  },
  {
    "alpha-2": "SI",
    "alpha-3": "SVN",
    name: "Slovenia",
  },
  {
    "alpha-2": "SB",
    "alpha-3": "SLB",
    name: "Solomon Islands",
  },
  {
    "alpha-2": "SO",
    "alpha-3": "SOM",
    name: "Somalia",
  },
  {
    "alpha-2": "ZA",
    "alpha-3": "ZAF",
    name: "South Africa",
  },
  {
    "alpha-2": "GS",
    "alpha-3": "SGS",
    name: "South Georgia and the South Sandwich Islands",
  },
  {
    "alpha-2": "SS",
    "alpha-3": "SSD",
    name: "South Sudan",
  },
  {
    "alpha-2": "ES",
    "alpha-3": "ESP",
    name: "Spain",
  },
  {
    "alpha-2": "LK",
    "alpha-3": "LKA",
    name: "Sri Lanka",
  },
  {
    "alpha-2": "SD",
    "alpha-3": "SDN",
    name: "Sudan",
  },
  {
    "alpha-2": "SR",
    "alpha-3": "SUR",
    name: "Suriname",
  },
  {
    "alpha-2": "SJ",
    "alpha-3": "SJM",
    name: "Svalbard and Jan Mayen",
  },
  {
    "alpha-2": "SE",
    "alpha-3": "SWE",
    name: "Sweden",
  },
  {
    "alpha-2": "CH",
    "alpha-3": "CHE",
    name: "Switzerland",
  },
  {
    "alpha-2": "SY",
    "alpha-3": "SYR",
    name: "Syrian Arab Republic",
  },
  {
    "alpha-2": "TW",
    "alpha-3": "TWN",
    name: "Taiwan, Province of China",
  },
  {
    "alpha-2": "TJ",
    "alpha-3": "TJK",
    name: "Tajikistan",
  },
  {
    "alpha-2": "TZ",
    "alpha-3": "TZA",
    name: "Tanzania, United Republic of",
  },
  {
    "alpha-2": "TH",
    "alpha-3": "THA",
    name: "Thailand",
  },
  {
    "alpha-2": "TL",
    "alpha-3": "TLS",
    name: "Timor-Leste",
  },
  {
    "alpha-2": "TG",
    "alpha-3": "TGO",
    name: "Togo",
  },
  {
    "alpha-2": "TK",
    "alpha-3": "TKL",
    name: "Tokelau",
  },
  {
    "alpha-2": "TO",
    "alpha-3": "TON",
    name: "Tonga",
  },
  {
    "alpha-2": "TT",
    "alpha-3": "TTO",
    name: "Trinidad and Tobago",
  },
  {
    "alpha-2": "TN",
    "alpha-3": "TUN",
    name: "Tunisia",
  },
  {
    "alpha-2": "TR",
    "alpha-3": "TUR",
    name: "Turkey",
  },
  {
    "alpha-2": "TM",
    "alpha-3": "TKM",
    name: "Turkmenistan",
  },
  {
    "alpha-2": "TC",
    "alpha-3": "TCA",
    name: "Turks and Caicos Islands",
  },
  {
    "alpha-2": "TV",
    "alpha-3": "TUV",
    name: "Tuvalu",
  },
  {
    "alpha-2": "UG",
    "alpha-3": "UGA",
    name: "Uganda",
  },
  {
    "alpha-2": "UA",
    "alpha-3": "UKR",
    name: "Ukraine",
  },
  {
    "alpha-2": "AE",
    "alpha-3": "ARE",
    name: "United Arab Emirates",
  },
  {
    "alpha-2": "GB",
    "alpha-3": "GBR",
    name: "United Kingdom of Great Britain and Northern Ireland",
  },
  {
    "alpha-2": "US",
    "alpha-3": "USA",
    name: "United States of America",
  },
  {
    "alpha-2": "UM",
    "alpha-3": "UMI",
    name: "United States Minor Outlying Islands",
  },
  {
    "alpha-2": "UY",
    "alpha-3": "URY",
    name: "Uruguay",
  },
  {
    "alpha-2": "UZ",
    "alpha-3": "UZB",
    name: "Uzbekistan",
  },
  {
    "alpha-2": "VU",
    "alpha-3": "VUT",
    name: "Vanuatu",
  },
  {
    "alpha-2": "VE",
    "alpha-3": "VEN",
    name: "Venezuela (Bolivarian Republic of)",
  },
  {
    "alpha-2": "VN",
    "alpha-3": "VNM",
    name: "Viet Nam",
  },
  {
    "alpha-2": "VG",
    "alpha-3": "VGB",
    name: "Virgin Islands (British)",
  },
  {
    "alpha-2": "VI",
    "alpha-3": "VIR",
    name: "Virgin Islands (U.S.)",
  },
  {
    "alpha-2": "WF",
    "alpha-3": "WLF",
    name: "Wallis and Futuna",
  },
  {
    "alpha-2": "EH",
    "alpha-3": "ESH",
    name: "Western Sahara",
  },
  {
    "alpha-2": "XK",
    "alpha-3": "XXK",
    name: "Kosovo",
  },
  {
    "alpha-2": "YE",
    "alpha-3": "YEM",
    name: "Yemen",
  },
  {
    "alpha-2": "ZM",
    "alpha-3": "ZMB",
    name: "Zambia",
  },
  {
    "alpha-2": "ZW",
    "alpha-3": "ZWE",
    name: "Zimbabwe",
  },
];

export default countryCodes;
