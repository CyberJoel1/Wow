
"use client"
import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L, { marker } from 'leaflet';


type Props = {
  datas?: any,
  setDatas?: any,
  position: any,
  setPosition: any
}

const MapaLocalization = (props: Props) => {



  const { position } = props;
  console.log("la latitud es " + position.latitud);
  console.log("la longitud es: " + position.longitud)


  return (
    <div>
      <MapContainer center={new L.LatLng(position.latitud, position.longitud)} zoom={14} className='relative top-0 bottom-0 w-full h-[130px] md:h-[250px]'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[position.latitud, position.longitud]} icon={L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        })} />



      </MapContainer>

    </div>
  )
}



export default MapaLocalization