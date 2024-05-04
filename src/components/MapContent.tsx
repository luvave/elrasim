'use client';

import {Marker, Popup, useMapEvents} from 'react-leaflet';
import {useEffect, useMemo, useState} from 'react';

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export interface MapContentProps {
  defaultPosition: number[];
}

interface MarkerProps {
  lat: number;
  lng: number;
  id: string;
}

export default function MapContent({ defaultPosition }: MapContentProps) {
  const [markers, setMarkers] = useState<MarkerProps[]>([]);

  const map = useMapEvents({
    click: (e) => {
      const coords = e.latlng;
      const newMarker: MarkerProps = {
        lat: coords.lat,
        lng: coords.lng,
        id: `${coords.lat} ${coords.lng}`
      };
      setMarkers((prev) => [...prev, newMarker])
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: markers.map((m) => L.latLng(m.lat, m.lng)),
      show: false,
      draggableWaypoints: false,
      addWaypoints: false,
      routeWhileDragging: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    }
  }, [map, markers]);

  const markerEventHandlers = useMemo(() => ({
    dragend(e) {
      setMarkers((prev) => {
        const tmp = [...prev];
        const touchedMarkerId = prev.findIndex((m) => m.id === e.target.options.id);
        tmp[touchedMarkerId] = {
          lat: e.target.getLatLng().lat,
          lng: e.target.getLatLng().lng,
          id: e.target.options.id
        };
        return tmp;
      })
    },
  }), [])

  if (defaultPosition.length < 2) return null;

  return (
    <>
      <Marker
        position={{
          lat: defaultPosition[0],
          lng: defaultPosition[1]
        }}
      >
        <Popup>
          Tady to začalo haha
        </Popup>
      </Marker>
      {markers.map(({ id, lng, lat}) => (
        <Marker
          key={id}
          id={id}
          position={[lat, lng]}
          draggable
          autoPan
          eventHandlers={markerEventHandlers}
        >
          <Popup>
            <p>{id}</p>
          </Popup>
        </Marker>
      ))}
    </>
  )
}