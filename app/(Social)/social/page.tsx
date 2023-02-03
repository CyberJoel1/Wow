"use client"
import React, { Suspense, useState } from 'react'
import NavBar from '../../../components/Profile/Navbar/NavBar';
import SectionPublication from '../../../components/Profile/publications/SectionPublication';
import SchemaInsertPublication from '../../../components/Publication/formatInsertPublication/SchemaInsertPublication';
import SchemaPublication from '../../../components/Publication/formatPublication/SchemaPublication';
import ShowPublicationRecomendation from '../../../components/Publication/typesShowPublication/ShowPublicationRecomendation';
import { getToken } from '../../../utils/Localstorage/ManageLocalStorage.User';
import { useGlobalContext } from '../../Context/store';


type Props = {}

const page = (props: Props) => {
  const { datas, setDatas } = useGlobalContext();
  const {userName} =getToken();
  return (
    <>

      {/* <div className='w-full bg-blue-600 h-[140px] grid grid-cols-1 place-items-center font-bold'>
        <h1 className='text-white text-6xl'>WAROOM</h1>
      </div> */}
        
      <div className='grid grid-cols-7'>


        <div className='md:col-start-1 md:col-end-8 col-span-7 rounded-lg mt-6 mb-3 drop-shadow-lg'>
        {/* <SectionPublication profile={""} />
        <SectionPublication profile={"kath1"} /> */}
                <h2 className='text-center font-bodyFont pt-5 text-slate-700'>Publicaciones recomendadas</h2>
                <ShowPublicationRecomendation profile={userName} />
                <h2 className='text-center font-bodyFont text-slate-700 pt-28'>Lo lamentamos no hay más publicaciones</h2>
        </div>


      </div>

    </>
  )
}

export default page