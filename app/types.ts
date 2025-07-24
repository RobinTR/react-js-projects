export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
  cca3: string;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  timezones: string[];
  borders?: string[];
  languages?: {
    [key: string]: string;
  };
  currencies?: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  demonyms?: {
    [languageCode: string]: {
      f: string;
      m: string;
    };
  };
}
