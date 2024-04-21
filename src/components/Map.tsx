'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

interface Props {
  width: number | string;
  height: number | string;
}

export default function Map(props: Props) {
  const { height, width } = props;
  const position = [50.0755478, 14.4548894];

  return (
    <MapContainer
      style={{
        height,
        width
      }}
      center={{
        lat: position[0],
        lng: position[1]
      }}
      zoom={20}
      scrollWheelZoom
      key={`${JSON.stringify(props)}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        position={{
          lat: position[0],
          lng: position[1]
        }}
      >
        <Popup>
          Tady to začalo haha
        </Popup>
      </Marker>
    </MapContainer>
  );
}