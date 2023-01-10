

import React from 'react'
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L, { marker } from 'leaflet';
import { HashtagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useGlobalContext } from '../../app/Context/store';
type Props = {
  datas: any,
  setDatas: any
}
export const ChangeView = React.memo(({ coords, zoom }: any) => {
  const { zooms } = useGlobalContext();
  const map = useMap();
 
  map.setView(coords, zooms);

  return null;
})



const MapCaller = () => {



  const { datas, setDatas, setZooms, zooms } = useGlobalContext();
  const center = [datas.lat, datas.lng];


  const Markers = () => {

    const map = useMapEvents({
      click(e) {

        e.originalEvent.preventDefault();
        setZooms(map.getZoom()); // get current Zoom of map

        setDatas({
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

      <MapContainer center={new L.LatLng(datas.lat, datas.lng)} zoom={zooms} style={{ width: "100%", height: "200px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {datas.lat && datas.lng && (
          <Marker position={[datas.lat, datas.lng]} icon={L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          })} />
        )}
        <ChangeView coords={center} zoom={zooms} />
        <Markers />
      </MapContainer>

    </div>
  )
}




const MapaRegister = () => {

  return (
    <div>
      <MapCaller />

    </div>
  )
}



export default MapaRegister