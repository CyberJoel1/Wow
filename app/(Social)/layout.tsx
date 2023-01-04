'use client'
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";




export default function SocialLayout({ children }: {
  children: React.ReactNode
}) {
  const [render, setRender] = useState(false);
  
  useEffect(() => {
    setRender(true);
 }, []);
 if (!render) {
  return null;
}
  return (
 <div className="bg-stone-100">
    
    {children}
    
      </div>
  );
}