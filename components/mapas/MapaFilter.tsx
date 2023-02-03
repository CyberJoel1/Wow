

import React from 'react'
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L, { marker } from 'leaflet';
import { HashtagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useGlobalContext } from '../../app/Context/store';
type Props = {
  datasFilters: any,
  setDatas: any
}
export const ChangeView = React.memo(({ coords, zoom }: any) => {
  const { zoomsFilter } = useGlobalContext();
  const map = useMap();
 
  map.setView(coords, zoomsFilter);

  return null;
})



const MapCallerFilter = () => {



  const { datasFilters, setDatasFilters ,zoomsFilter,setZoomsFilter} = useGlobalContext();
  const center = [datasFilters.lat, datasFilters.lng];


  const Markers = () => {

    const map = useMapEvents({
      click(e) {

        e.originalEvent.preventDefault();
        setZoomsFilter(map.getZoom()); // get current Zoom of map

        setDatasFilters({
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
      },
    })

    return (
      null
    )

  }



  return (
    <div>

      <MapContainer center={new L.LatLng(datasFilters.lat, datasFilters.lng)} zoom={zoomsFilter} style={{ width: "100%", height: "200px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {datasFilters.lat && datasFilters.lng && (
          <Marker position={[datasFilters.lat, datasFilters.lng]} icon={L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          })} />
        )}
        <ChangeView coords={center} zoom={zoomsFilter} />
        <Markers />
      </MapContainer>

    </div>
  )
}




const MapaFilter = () => {

  return (
    <div>
      <MapCallerFilter />

    </div>
  )
}



export default MapaFilter