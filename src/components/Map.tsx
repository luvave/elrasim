'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import MapContent, { MapContentProps } from '@/components/MapContent';

interface Props extends Omit<MapContentProps, 'defaultPosition'> {
  width: number | string;
  height: number | string;
  defaultPosition?: number[]
}

export default function Map(props: Props) {
  const { height, width, defaultPosition, ...rest } = props;
  const initialPosition = defaultPosition || [50.0755478, 14.4548894];

  if (initialPosition.length < 2) return null

  return (
    <MapContainer
      style={{
        height,
        width
      }}
      center={{
        lat: initialPosition[0],
        lng: initialPosition[1]
      }}
      zoom={20}
      scrollWheelZoom
      key={`${JSON.stringify(props)}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MapContent defaultPosition={initialPosition} {...rest} />
    </MapContainer>
  );
}