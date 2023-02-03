import React, { useEffect, useState, useRef } from "react";

import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import 'leaflet/dist/leaflet.css'


type Props = {
  datas?: any,
  setDatas?: any,
  position:any,
setPosition:any
}
function Map(props:Props) {

const efectos = async ()=>{
 
    
  const {position} = props;

  
      var map = L.map('map', {
        center: [position.latitud, position.longitud],
        zoom: 18,
        layers: 
          [
            L.tileLayer(
              'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
              { attribution: ''}
            ),
          ]
      })
      L.marker([position.latitud, position.longitud]).addTo(map)

      
    }
    useEffect(() => {
      efectos();
    
      return () => {
        
      }
    }, [])
    
    
      return <div id="map" style={{ height: "30vh"}}></div>
    
    
    
}

export default Map;