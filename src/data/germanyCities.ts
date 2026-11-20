export type GermanyCity = {
  id: string;
  name: string;
  /** Marketplace filter value */
  filter: string;
  /** Vertical position on map.png (0–100) */
  top: number;
  /** Horizontal position on map.png (0–100) */
  left: number;
  featured?: boolean;
  ads: number;
  weekly: number;
};

export const GERMANY_CITIES: GermanyCity[] = [
  {
    id: "hamburg",
    name: "HAMBURG",
    filter: "Hamburg",
    top: 7,
    left: 36,
    featured: true,
    ads: 487,
    weekly: 112,
  },
  {
    id: "bremen",
    name: "BREMEN",
    filter: "Bremen",
    top: 18,
    left: 32,
    ads: 142,
    weekly: 31,
  },
  {
    id: "hannover",
    name: "HANNOVER",
    filter: "Hannover",
    top: 28,
    left: 40,
    ads: 198,
    weekly: 44,
  },
  {
    id: "berlin",
    name: "BERLIN",
    filter: "Berlin",
    top: 26,
    left: 68,
    featured: true,
    ads: 920,
    weekly: 204,
  },
  {
    id: "leipzig",
    name: "LEIPZIG",
    filter: "Leipzig",
    top: 42,
    left: 62,
    ads: 176,
    weekly: 39,
  },
  {
    id: "dresden",
    name: "DRESDEN",
    filter: "Dresden",
    top: 48,
    left: 74,
    ads: 154,
    weekly: 33,
  },
  {
    id: "koln",
    name: "KÖLN",
    filter: "Köln",
    top: 48,
    left: 18,
    featured: true,
    ads: 356,
    weekly: 88,
  },
  {
    id: "frankfurt",
    name: "FRANKFURT AM MAIN",
    filter: "Frankfurt am Main",
    top: 54,
    left: 36,
    featured: true,
    ads: 410,
    weekly: 97,
  },
  {
    id: "stuttgart",
    name: "STUTTGART",
    filter: "Stuttgart",
    top: 70,
    left: 34,
    ads: 268,
    weekly: 61,
  },
  {
    id: "nurnberg",
    name: "NÜRNBERG",
    filter: "Nürnberg",
    top: 62,
    left: 52,
    ads: 187,
    weekly: 42,
  },
  {
    id: "munchen",
    name: "MÜNCHEN",
    filter: "München",
    top: 82,
    left: 58,
    featured: true,
    ads: 640,
    weekly: 151,
  },
];

/** Pixel size of /media/germany/map.png */
export const GERMANY_MAP_SIZE = { width: 1699, height: 1163 } as const;

export function cityToMapPoint(city: GermanyCity): [number, number] {
  return [
    (GERMANY_MAP_SIZE.height * city.top) / 100,
    (GERMANY_MAP_SIZE.width * city.left) / 100,
  ];
}

export function citiesBySpreadOrder(
  cities: GermanyCity[] = GERMANY_CITIES
): GermanyCity[] {
  // Spread from geographic center of the artwork (~middle of Germany)
  const cx = 50;
  const cy = 48;
  return [...cities].sort((a, b) => {
    const da = Math.hypot(a.left - cx, a.top - cy);
    const db = Math.hypot(b.left - cx, b.top - cy);
    return da - db;
  });
}
