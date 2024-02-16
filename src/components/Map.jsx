import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = ({ lng, lat }) => {
  const position = [lat, lng];

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          A pin at coordinates: <br />
          Latitude: {lat} <br />
          Longitude: {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
