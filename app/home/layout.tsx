
'use client'
import 'leaflet/dist/leaflet.css';
import NavbarHome from '../../components/home/NavbarHome';



export default function HomeLayout({ children }: {
  children: React.ReactNode
}) {


  return (
 <div className="bg-stone-100">
    <NavbarHome/>
    {children}
    
      </div>
  );
}