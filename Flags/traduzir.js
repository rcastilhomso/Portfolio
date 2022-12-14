const NOMES = {
  Europe: "Europa",
  Africa: "África",
  Asia: "Ásia",
  Oceania: "Oceania",
  Americas: "Américas",
  Caribbean: "América Central",
  "South America": "América do Sul",
  "Central America": "América Central",
  "North America": "América do Norte",

  Brazil: "Brasil",
  Germany: "Alemanha",
  France: "França",
  Italy: "Itália",
  Spain: "Espanha",
  England: "Inglaterra",
  Argentina: "Argentina",
  Uruguay: "Uruguai",
  Colombia: "Colômbia",
  Mexico: "México",
  Canada: "Canadá",
  Japan: "Japão",
  Australia: "Austrália",
  "South Africa": "África do Sul",
  Egypt: "Egito",
  Morocco: "Marrocos",
  Nigeria: "Nigéria",
  Ghana: "Gana",
  Algeria: "Argélia",
  "Saudi Arabia": "Arábia Saudita",
  Iran: "Irã",
  Iraq: "Iraque",
  Turkey: "Turquia",
  Russia: "Rússia",
  Ukraine: "Ucrânia",
  Belgium: "Bélgica",
  Netherlands: "Países Baixos",
  Switzerland: "Suíça",
  Austria: "Áustria",
  Denmark: "Dinamarca",
  Sweden: "Suécia",
  Norway: "Noruega",
  Finland: "Finlândia",
  "New Zealand": "Nova Zelândia",
  "South Korea": "Coreia do Sul",
  "North Korea": "Coreia do Norte",
  "Czech Republic": "República Tcheca",
  "Congo DR": "República Democrática do Congo",
  Congo: "República do Congo",
  "Ivory Coast": "Costa do Marfim",
  "Cape Verde": "Cabo Verde",
  "Sao Tome and Principe": "São Tomé e Príncipe",
  "St. Vincent Grenadines": "São Vicente e Granadinas",
  "St. Lucia": "Santa Lúcia",
  "St. Kitts and Nevis": "São Cristóvão e Névis",
  "St. Martin": "São Martinho",
  "St. Barthelemy": "São Bartolomeu",
  "St. Helena": "Santa Helena",
  "St. Pierre Miquelon": "São Pedro e Miquelon",
  Pakistan: "Paquistão",
  India: "Índia",
  Bhutan: "Butão",
  Maldives: "Maldivas",
  "United Arab Emirates": "Emirados Árabes Unidos",
  Oman: "Omã",
  Qatar: "Catar",
  Bahrain: "Bahrein",
  Cambodia: "Camboja",
  Thailand: "Tailândia",
  Vietnam: "Vietnã",
  Indonesia: "Indonésia",
  Malaysia: "Malásia",
  Singapore: "Singapura",
  Philippines: "Filipinas",
  "East Timor": "Timor Leste",
  "Dominican Republic": "República Dominicana",
  "Trinidad and Tobago": "Trinidad e Tobago",
  "Antigua and Barbuda": "Antígua e Barbuda",
  "Bosnia and Herzegovina": "Bósnia e Herzegovina",
  Czechia: "República Tcheca",
  Lebanon: "Líbano",
  "Sint Maarten": "São Martinho",
  "Turks and Caicos Islands": "Ilhas Turcas e Caicos",
  "British Virgin Islands": "Ilhas Virgens Britânicas",
  "U.S. Virgin Islands": "Ilhas Virgens Americanas",
  "Northern Mariana Islands": "Ilhas Marianas do Norte",
  "Falkland Islands": "Ilhas Malvinas",
  "South Georgia and the South Sandwich Islands":
    "Ilhas Geórgia do Sul e Sandwich do Sul",
  "French Southern Territories": "Territórios Franceses do Sul",
  "French Guiana": "Guiana Francesa",
  "French Polynesia": "Polinésia Francesa",
  "New Caledonia": "Nova Caledônia",
  "Wallis and Futuna": "Wallis e Futuna",
  "Saint Pierre and Miquelon": "São Pedro e Miquelon",
  Nicaragua: "Nicarágua",
  "Puerto Rico": "Porto Rico",
  "Sint Maarten": "São Martinho",
  Antactica: "Antártida",
  "Bouvet Island": "Ilha Bouvet",
  "Christmas Island": "Ilha Christmas",
  "Cocos Islands": "Ilhas Cocos",
  "Cook Islands": "Ilhas Cook",
  "Solomon Islands": "Ilhas Salomão",
  Armenia: "Armênia",
  Albania: "Albânia",
  "Saint Vincent and the Grenadines": "São Vicente e Granadinas",
  "Cocos (Keeling) Islands": "Ilhas Cocos (Keeling)",
  Rwanda: "Ruanda",
  "Isle of Man": "Ilha de Man",
  "Papua New Guinea": "Papua Nova Guiné",
  "Cayman Islands": "Ilhas Cayman",
  Antactica: "Antártida",
  Palestine: "Palestina",
  "Saint Helena, Ascension and Tristan da Cunha": "Santa Helena",
  Serbia: "Sérvia",
  Ecuador: "Equador",
  "South Sudan": "Sudão do Sul",
  "South Georgia": "Geórgia do Sul",
  "Saint Kitts and Nevis": "São Cristóvão e Névis",
  Bulgaria: "Bulgária",
  "French Southern and Antarctic Lands": "Territórios Franceses do Sul",
  Uzbekistan: "Uzbequistão",
  Ethiopia: "Etiópia",
  "Saint Barthélemy": "São Bartolomeu",
  Somalia: "Somália",
  Gambia: "Gâmbia",
  Ireland: "Irlanda",
  Scotland: "Escócia",
  Poland: "Polônia",
  Monaco: "Mônaco",
  Mongolia: "Mongólia",
  Guyana: "Guiana",
  Tanzania: "Tanzânia",
  Cyprus: "Chipre",
  Guadeloupe: "Guadalupe",
  Micronesia: "Micronésia",
  Kyrgyzstan: "Quirguistão",
  Panama: "Panamá",
  Grenada: "Granada",
  "Equatorial Guinea": "Guiné Equatorial",
  Belarus: "Bielorrússia",
  "Saint Martin": "São Martinho",
  Turkmenistan: "Turcomenistão",
  "DR Congo": "República Democrática do Congo",
  Greenland: "Groenlândia",
  "United Kingdom": "Reino Unido",
  "British Indian Ocean Territory": "Território Britânico do Oceano Índico",
  Martinique: "Martinica",
  Slovenia: "Eslovênia",
  Luxembourg: "Luxemburgo",
  Latvia: "Letônia",
  Estonia: "Estônia",
  Hungary: "Hungria",
  Sudan: "Sudão",
  Cameroon: "Camarões",
  "Pitcairn Islands": "Ilhas Pitcairn",
  Botswana: "Botsuana",
  "United States": "Estados Unidos",
  Kenya: "Quênia",
  "Faroe Islands": "Ilhas Faroe",
  Zambia: "Zâmbia",
  Gabon: "Gabão",
  Antarctica: "Antártida",
  "Central African Republic": "República Centro-Africana",
  "Guinea-Bissau": "Guiné-Bissau",
  "North Macedonia": "Macedônia do Norte",
  Kazakhstan: "Cazaquistão",
  Yemen: "Iêmen",
  Georgia: "Geórgia",
  "Marshall Islands": "Ilhas Marshall",
  "Norfolk Island": "Ilha Norfolk",
  Jordan: "Jordânia",
  Iceland: "Islândia",
  Paraguay: "Paraguai",
  Lithuania: "Lituânia",
  "Western Sahara": "Saara Ocidental",
  Syria: "Síria",
  Zimbabwe: "Zimbábue",
  Lesotho: "Lesoto",
  Afghanistan: "Afeganistão",
  Slovakia: "Eslováquia",
  Eswatini: "Suazilândia",
  "Republic of the Congo": "República do Congo",
  "United States Minor Outlying Islands": "Ilhas Menores Distantes dos EUA",
  "United States Virgin Islands": "Ilhas Virgens Americanas",
  Azerbaijan: "Azerbaijão",
  Turkmensitan: "Turcomenistão",
  "Heard Island and McDonald Islands": "Ilhas McDonald e Heard",
  "Svalbard and Jan Mayen": "Svalbard e Jan Mayen",
  Niger: "Níger",
  Lybia: "Líbia",
  "Caribbean Netherlands": "Países Baixos Caribenhos",
};

export function traduzir(nome) {
  return NOMES[nome] ?? nome;
}
