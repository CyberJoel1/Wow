'use client'
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import NavBar from '../../components/Profile/Navbar/NavBar';




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
    <NavBar/>
    {children}
    
      </div>
  );
}