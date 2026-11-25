export type GermanyCity = {
  id: string;
  name: string;
  /** Marketplace filter value */
  filter: string;
  lat: number;
  lng: number;
  /** Position on static map.png (percent) */
  x: number;
  y: number;
  featured?: boolean;
  ads: number;
  weekly: number;
};

export const GERMANY_CITIES: GermanyCity[] = [
  {
    id: "hamburg",
    name: "HAMBURG",
    filter: "Hamburg",
    lat: 53.5511,
    lng: 9.9937,
    x: 42,
    y: 14,
    featured: true,
    ads: 487,
    weekly: 112,
  },
  {
    id: "bremen",
    name: "BREMEN",
    filter: "Bremen",
    lat: 53.0793,
    lng: 8.8017,
    x: 34,
    y: 18,
    ads: 142,
    weekly: 31,
  },
  {
    id: "hannover",
    name: "HANNOVER",
    filter: "Hannover",
    lat: 52.3759,
    lng: 9.732,
    x: 40,
    y: 28,
    ads: 198,
    weekly: 44,
  },
  {
    id: "berlin",
    name: "BERLIN",
    filter: "Berlin",
    lat: 52.52,
    lng: 13.405,
    x: 68,
    y: 26,
    featured: true,
    ads: 920,
    weekly: 204,
  },
  {
    id: "leipzig",
    name: "LEIPZIG",
    filter: "Leipzig",
    lat: 51.3397,
    lng: 12.3731,
    x: 60,
    y: 42,
    ads: 176,
    weekly: 39,
  },
  {
    id: "dresden",
    name: "DRESDEN",
    filter: "Dresden",
    lat: 51.0504,
    lng: 13.7373,
    x: 72,
    y: 46,
    ads: 154,
    weekly: 33,
  },
  {
    id: "duisburg",
    name: "DUISBURG",
    filter: "Duisburg",
    lat: 51.4344,
    lng: 6.7623,
    x: 20,
    y: 38,
    ads: 128,
    weekly: 27,
  },
  {
    id: "essen",
    name: "ESSEN",
    filter: "Essen",
    lat: 51.4556,
    lng: 7.0116,
    x: 26,
    y: 43,
    ads: 164,
    weekly: 36,
  },
  {
    id: "dusseldorf",
    name: "DÜSSELDORF",
    filter: "Düsseldorf",
    lat: 51.2277,
    lng: 6.7735,
    x: 16,
    y: 48,
    ads: 241,
    weekly: 52,
  },
  {
    id: "koln",
    name: "KÖLN",
    filter: "Köln",
    lat: 50.9375,
    lng: 6.9603,
    x: 22,
    y: 56,
    featured: true,
    ads: 356,
    weekly: 88,
  },
  {
    id: "frankfurt",
    name: "FRANKFURT AM MAIN",
    filter: "Frankfurt am Main",
    lat: 50.1109,
    lng: 8.6821,
    x: 34,
    y: 54,
    featured: true,
    ads: 410,
    weekly: 97,
  },
  {
    id: "stuttgart",
    name: "STUTTGART",
    filter: "Stuttgart",
    lat: 48.7758,
    lng: 9.1829,
    x: 38,
    y: 72,
    ads: 268,
    weekly: 61,
  },
  {
    id: "nurnberg",
    name: "NÜRNBERG",
    filter: "Nürnberg",
    lat: 49.4521,
    lng: 11.0767,
    x: 52,
    y: 64,
    ads: 187,
    weekly: 42,
  },
  {
    id: "munchen",
    name: "MÜNCHEN",
    filter: "München",
    lat: 48.1351,
    lng: 11.582,
    x: 56,
    y: 82,
    ads: 640,
    weekly: 151,
  },
];

/** Geographic center of Germany — spread animation origin */
export const GERMANY_CENTER = { lat: 51.1657, lng: 10.4515 } as const;

/** Initial view: Germany + neighbors (legacy leaflet) */
export const GERMANY_BOUNDS: [[number, number], [number, number]] = [
  [47.2, 5.7],
  [55.1, 15.1],
];

export function cityDistanceFromCenter(city: GermanyCity): number {
  const dLat = city.lat - GERMANY_CENTER.lat;
  const dLng = city.lng - GERMANY_CENTER.lng;
  return Math.hypot(dLat, dLng);
}

export function citiesBySpreadOrder(
  cities: GermanyCity[] = GERMANY_CITIES
): GermanyCity[] {
  return [...cities].sort(
    (a, b) => cityDistanceFromCenter(a) - cityDistanceFromCenter(b)
  );
}
