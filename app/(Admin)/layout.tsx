"use client"
import { useEffect, useState } from 'react';
import AdminBar from '../../components/Admin/AdminBar';
export default function AdminLayout({ children }: {
    children: React.ReactNode
}) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
  if (!render) {
    return null;
  }
    return (<section>
        <div className='flex h-screen'>
      <div className="max-h-full flex-none">
        <AdminBar />
      </div>
      <div className='grow bg-slate-300 max-h-full max-w-[100%] overflow-x-auto'>
        <div className='bg-slate-300'>
        {children}
        </div>
      </div>
    </div>
    </section>);
}