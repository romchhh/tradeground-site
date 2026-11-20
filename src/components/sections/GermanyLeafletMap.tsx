"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  GERMANY_BOUNDS,
  GERMANY_CITIES,
  citiesBySpreadOrder,
  type GermanyCity,
} from "@/data/germanyCities";

/** Esri dark canvas — no API key required */
const TILE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}";
const LABELS_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}";

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

    const bounds = L.latLngBounds(GERMANY_BOUNDS);

    const map = L.map(el, {
      zoomControl: false,
      attributionControl: false,
      minZoom: 5,
      maxZoom: 11,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      maxBounds: bounds.pad(0.4),
      maxBoundsViscosity: 0.75,
      scrollWheelZoom: true,
      touchZoom: true,
      dragging: true,
      doubleClickZoom: true,
      boxZoom: false,
      keyboard: true,
    });

    L.control.zoom({ position: "topright" }).addTo(map);

    L.tileLayer(TILE_URL, {
      maxZoom: 16,
      className: "germany__map-tiles",
      updateWhenIdle: true,
      keepBuffer: 2,
      attribution: "Esri",
    }).addTo(map);

    L.tileLayer(LABELS_URL, {
      maxZoom: 16,
      className: "germany__map-tiles germany__map-tiles--labels",
      updateWhenIdle: true,
      keepBuffer: 2,
      opacity: 0.85,
    }).addTo(map);

    map.fitBounds(bounds, { padding: [28, 28] });
    mapRef.current = map;

    const sizeTimer = window.setTimeout(() => {
      map.invalidateSize();
    }, 100);
    timersRef.current.push(sizeTimer);

    const ro = new ResizeObserver(() => {
      map.invalidateSize({ animate: false });
    });
    ro.observe(el);

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
      ro.disconnect();
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

    // Ensure tiles layout after section becomes visible
    map.invalidateSize({ animate: false });

    const ordered = citiesBySpreadOrder(cities);

    ordered.forEach((city, index) => {
      const timer = window.setTimeout(() => {
        if (markersRef.current.has(city.id)) return;

        const isActive = city.id === highlightIdRef.current;
        const marker = L.marker([city.lat, city.lng], {
          icon: makeIcon(city, isActive, true),
          riseOnHover: true,
          zIndexOffset: isActive ? 1000 : city.featured ? 400 : 0,
        })
          .addTo(map)
          .on("click", () => onSelectRef.current(city.id))
          .on("mouseover", () => onHoverRef.current(city.id))
          .on("mouseout", () => onHoverRef.current(null));

        markersRef.current.set(city.id, marker);

        window.setTimeout(() => {
          marker.setIcon(makeIcon(city, city.id === highlightIdRef.current));
        }, 450);
      }, 100 + index * 85);

      timersRef.current.push(timer);
    });
  }, [revealed, cities]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedId || !revealedOnceRef.current) return;
    const city = cities.find((c) => c.id === selectedId);
    if (!city) return;

    const targetZoom = Math.min(
      map.getMaxZoom(),
      Math.max(map.getZoom(), 7)
    );
    map.flyTo([city.lat, city.lng], targetZoom, {
      duration: 0.5,
      easeLinearity: 0.25,
    });
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
