"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// Fix leaflet marker missing icons (required for Next.js)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function LeafletMap() {
  const [layerType, setLayerType] = useState("map");

  return (
    <div className="w-full h-[500px] overflow-hidden relative">

      {/* === Custom Map/Satellite Toggle === */}
      <div className="absolute top-4 left-4 z-[1000] bg-white rounded-[2px] flex overflow-hidden">
        {/* MAP BUTTON */}
        <button
          onClick={() => setLayerType("map")}
          className={`px-4 py-2 text-sm transition ${layerType === "map"
              ? "text-[#1A2B6D] font-bold bg-gray-200"
              : "text-gray-600"
            }`}
        >
          Map
        </button>

        {/* SATELLITE BUTTON */}
        <button
          onClick={() => setLayerType("sat")}
          className={`px-4 py-2 text-sm border-l border-[#EEE] transition ${layerType === "sat"
              ? "text-[#1E3A8A] font-bold bg-gray-200"
              : "text-gray-600"
            }`}
        >
          Satellite
        </button>
      </div>

      {/* === MAP CONTAINER === */}
      <MapContainer
        center={[18.562159, 73.784004]}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false} // disable default zoom so we can position it
        className="h-full w-full"
      >
        {/* Custom Zoom Buttons Bottom-Right */}
        <ZoomControl position="bottomright" />

        {/* MAP VIEW */}
        {layerType === "map" && (
          <TileLayer
            url={`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TZduPOZwY7PSjvAi7bet`}
            attribution='&copy; MapTiler & OpenStreetMap contributors'
          />

        )}

        {/* SATELLITE VIEW */}
        {layerType === "sat" && (
          <TileLayer
            url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=TZduPOZwY7PSjvAi7bet`}
            attribution='&copy; MapTiler © OpenStreetMap contributors'
          />

        )}

        {/* MARKER VISIBLE ON BOTH VIEWS */}
        <Marker position={[18.562159, 73.784004]}>
          <Popup>
            <b>Orbiz Analytics India Pvt. Ltd.</b>
            <br />
            Office No. 207, Downtown City Vista<br />
            Fountain Road, Kharadi,<br />
            Pune - 411014
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
