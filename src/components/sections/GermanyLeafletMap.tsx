"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  GERMANY_CITIES,
  GERMANY_MAP_SIZE,
  cityToMapPoint,
  type GermanyCity,
} from "@/data/germanyCities";

function pinHtml(city: GermanyCity, isActive: boolean) {
  const active = isActive ? " is-active" : "";
  if (city.featured) {
    return `<span class="germany-leaflet-pin germany-leaflet-pin--featured${active}" role="presentation"><span class="germany-leaflet-pin__icon" aria-hidden="true"></span><span class="germany-leaflet-pin__label">${city.name}</span></span>`;
  }
  return `<span class="germany-leaflet-pin${active}" role="presentation"><span class="germany-leaflet-pin__dot" aria-hidden="true"></span><span class="germany-leaflet-pin__name">${city.name}</span></span>`;
}

function makeIcon(city: GermanyCity, isActive: boolean) {
  return L.divIcon({
    className: "germany-leaflet-icon",
    html: pinHtml(city, isActive),
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}

export function GermanyLeafletMap({
  cities = GERMANY_CITIES,
  activeId,
  mapLabel,
  onSelect,
}: {
  cities?: GermanyCity[];
  activeId: string;
  mapLabel: string;
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const onSelectRef = useRef(onSelect);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;

    const { width: W, height: H } = GERMANY_MAP_SIZE;
    const bounds = L.latLngBounds([0, 0], [H, W]);

    const map = L.map(el, {
      crs: L.CRS.Simple,
      zoomControl: false,
      attributionControl: false,
      minZoom: -1.2,
      maxZoom: 1.6,
      zoomSnap: 0.1,
      zoomDelta: 0.4,
      wheelPxPerZoomLevel: 90,
      maxBounds: bounds.pad(0.02),
      maxBoundsViscosity: 1,
      scrollWheelZoom: true,
      touchZoom: true,
      dragging: true,
      doubleClickZoom: true,
      boxZoom: false,
      keyboard: true,
    });

    L.control.zoom({ position: "topright" }).addTo(map);

    L.imageOverlay("/media/germany/map.png", bounds, {
      interactive: false,
      opacity: 1,
    }).addTo(map);

    map.fitBounds(bounds, { padding: [8, 8] });
    map.setMinZoom(map.getZoom());
    mapRef.current = map;

    const ro = new ResizeObserver(() => {
      map.invalidateSize();
      const z = map.getZoom();
      const min = map.getBoundsZoom(bounds, false);
      if (map.getMinZoom() !== min) map.setMinZoom(min);
      if (z < min) map.setZoom(min);
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    cities.forEach((city) => {
      const isActive = city.id === activeId;
      const point = cityToMapPoint(city);
      const marker = L.marker(point, {
        icon: makeIcon(city, isActive),
        riseOnHover: true,
        zIndexOffset: isActive ? 1000 : city.featured ? 400 : 0,
      })
        .addTo(map)
        .on("click", () => onSelectRef.current(city.id));

      markersRef.current.push(marker);
    });
  }, [cities, activeId]);

  useEffect(() => {
    const map = mapRef.current;
    const city = cities.find((c) => c.id === activeId);
    if (!map || !city) return;

    const point = cityToMapPoint(city);
    const targetZoom = Math.min(map.getMaxZoom(), Math.max(map.getZoom(), map.getMinZoom() + 0.55));
    map.flyTo(point, targetZoom, { duration: 0.55, easeLinearity: 0.25 });
  }, [activeId, cities]);

  return (
    <div
      ref={containerRef}
      className="germany__map-leaflet"
      role="application"
      aria-label={mapLabel}
    />
  );
}
