"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  GERMANY_CITIES,
  GERMANY_MAP_SIZE,
  citiesBySpreadOrder,
  cityToMapPoint,
  type GermanyCity,
} from "@/data/germanyCities";

function pinHtml(city: GermanyCity, isActive: boolean, appearing: boolean) {
  const active = isActive ? " is-active" : "";
  const appear = appearing ? " is-appearing" : "";
  if (city.featured) {
    return `<span class="germany-leaflet-pin germany-leaflet-pin--featured${active}${appear}" role="presentation"><span class="germany-leaflet-pin__icon" aria-hidden="true"></span><span class="germany-leaflet-pin__label">${city.name}</span></span>`;
  }
  return `<span class="germany-leaflet-pin${active}${appear}" role="presentation"><span class="germany-leaflet-pin__dot" aria-hidden="true"></span><span class="germany-leaflet-pin__name">${city.name}</span></span>`;
}

function makeIcon(city: GermanyCity, isActive: boolean, appearing = false) {
  return L.divIcon({
    className: "germany-leaflet-icon",
    html: pinHtml(city, isActive, appearing),
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}

export function GermanyLeafletMap({
  cities = GERMANY_CITIES,
  highlightId,
  selectedId,
  mapLabel,
  revealed,
  onSelect,
  onHover,
}: {
  cities?: GermanyCity[];
  highlightId: string | null;
  selectedId: string | null;
  mapLabel: string;
  revealed: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const timersRef = useRef<number[]>([]);
  const onSelectRef = useRef(onSelect);
  const onHoverRef = useRef(onHover);
  const highlightIdRef = useRef(highlightId);
  const revealedOnceRef = useRef(false);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    onHoverRef.current = onHover;
  }, [onHover]);

  useEffect(() => {
    highlightIdRef.current = highlightId;
    markersRef.current.forEach((marker, id) => {
      const city = cities.find((c) => c.id === id);
      if (!city) return;
      marker.setIcon(makeIcon(city, id === highlightId));
      marker.setZIndexOffset(
        id === highlightId ? 1000 : city.featured ? 400 : 0
      );
    });
  }, [highlightId, cities]);

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

    // One invalidate after layout — avoid ResizeObserver thrash
    const sizeTimer = window.setTimeout(() => {
      map.invalidateSize();
      const min = map.getBoundsZoom(bounds, false);
      map.setMinZoom(min);
      if (map.getZoom() < min) map.setZoom(min);
    }, 80);
    timersRef.current.push(sizeTimer);

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
      markersRef.current.forEach((m) => m.remove());
      markersRef.current.clear();
      map.remove();
      mapRef.current = null;
      revealedOnceRef.current = false;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !revealed || revealedOnceRef.current) return;
    revealedOnceRef.current = true;

    const ordered = citiesBySpreadOrder(cities);

    ordered.forEach((city, index) => {
      const timer = window.setTimeout(() => {
        if (markersRef.current.has(city.id)) return;

        const isActive = city.id === highlightIdRef.current;
        const point = cityToMapPoint(city);
        const marker = L.marker(point, {
          icon: makeIcon(city, isActive, true),
          riseOnHover: true,
          zIndexOffset: isActive ? 1000 : city.featured ? 400 : 0,
        })
          .addTo(map)
          .on("click", () => onSelectRef.current(city.id))
          .on("mouseover", () => onHoverRef.current(city.id))
          .on("mouseout", () => onHoverRef.current(null));

        markersRef.current.set(city.id, marker);

        // Drop appearing class after animation
        window.setTimeout(() => {
          marker.setIcon(makeIcon(city, city.id === highlightIdRef.current));
        }, 500);
      }, 120 + index * 90);

      timersRef.current.push(timer);
    });
  }, [revealed, cities]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedId || !revealedOnceRef.current) return;
    const city = cities.find((c) => c.id === selectedId);
    if (!city) return;

    const point = cityToMapPoint(city);
    const targetZoom = Math.min(
      map.getMaxZoom(),
      Math.max(map.getZoom(), map.getMinZoom() + 0.45)
    );
    map.flyTo(point, targetZoom, { duration: 0.45, easeLinearity: 0.25 });
  }, [selectedId, cities]);

  return (
    <div
      ref={containerRef}
      className="germany__map-leaflet"
      role="application"
      aria-label={mapLabel}
    />
  );
}
