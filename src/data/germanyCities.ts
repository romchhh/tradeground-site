export type GermanyCity = {
  id: string;
  name: string;
  /** Vertical position on map.png (0–100) */
  top: number;
  /** Horizontal position on map.png (0–100) */
  left: number;
  featured?: boolean;
  ads?: number;
  weekly?: number;
};

export const GERMANY_CITIES: GermanyCity[] = [
  { id: "hamburg", name: "HAMBURG", top: 7, left: 36, featured: true, ads: 487, weekly: 112 },
  { id: "bremen", name: "BREMEN", top: 18, left: 32 },
  { id: "hannover", name: "HANNOVER", top: 28, left: 40 },
  { id: "berlin", name: "BERLIN", top: 26, left: 68, featured: true, ads: 920, weekly: 204 },
  { id: "leipzig", name: "LEIPZIG", top: 42, left: 62 },
  { id: "dresden", name: "DRESDEN", top: 48, left: 74 },
  { id: "koln", name: "KÖLN", top: 48, left: 18, featured: true, ads: 356, weekly: 88 },
  { id: "frankfurt", name: "FRANKFURT AM MAIN", top: 54, left: 36, featured: true, ads: 410, weekly: 97 },
  { id: "stuttgart", name: "STUTTGART", top: 70, left: 34 },
  { id: "nurnberg", name: "NÜRNBERG", top: 62, left: 52 },
  { id: "munchen", name: "MÜNCHEN", top: 82, left: 58, featured: true, ads: 640, weekly: 151 },
];

/** Pixel size of /media/germany/map.png */
export const GERMANY_MAP_SIZE = { width: 1699, height: 1163 } as const;

export function cityToMapPoint(city: GermanyCity): [number, number] {
  return [
    (GERMANY_MAP_SIZE.height * city.top) / 100,
    (GERMANY_MAP_SIZE.width * city.left) / 100,
  ];
}