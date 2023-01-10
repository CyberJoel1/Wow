
"use client"
import React, { Suspense, useState } from 'react'
import NavBar from '../../../components/Profile/Navbar/NavBar';
import SectionPublication from '../../../components/Profile/publications/SectionPublication';
import SchemaInsertPublication from '../../../components/Publication/formatInsertPublication/SchemaInsertPublication';
import SchemaPublication from '../../../components/Publication/formatPublication/SchemaPublication';
import { useGlobalContext } from '../../Context/store';


type Props = {}

const page = (props: Props) => {
  const { datas, setDatas } = useGlobalContext();
  return (
    <>

      {/* <div className='w-full bg-blue-600 h-[140px] grid grid-cols-1 place-items-center font-bold'>
        <h1 className='text-white text-6xl'>WAROOM</h1>
      </div> */}
        
      <div className='grid grid-cols-7'>


        <div className='md:col-start-2 md:col-end-7 col-span-7 bg-stone-100 rounded-lg mt-6 mb-3 drop-shadow-lg'>
        <SectionPublication profile={"sec11"} />
        <SectionPublication profile={"kath1"} />
        </div>


      </div>

    </>
  )
}

export default page