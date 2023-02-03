import { HomeIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {
  banos?:number 
  habitaciones?:number;
  medidad?:number;

}

const InfoPrincipal = (props: Props) => {
  const { banos, habitaciones,medidad}= props;
  return (
    <div className='flex flex-row items-center border border-indigo-200 rounded-lg bg-blue-100'>

    <div className='flex-1 h-[90%] my-1  mx-1  grid grid-cols-1 gap-4 place-items-center border-r-2 border-gray-300'>
      <div className='flex md:flex-row flex-col items-center self-center'>
        <HomeIcon className='w-5'></HomeIcon>
        <p className='pl-2 md:text-[1.1vw] text-[1.8vw] md:text-base self-end pt-1'>{habitaciones} Habitaciones</p>
      </div>

    </div>
    <div className='flex-1 h-[90%] my-1  mx-1  grid grid-cols-1 gap-4 place-items-center'>
      <div className='flex md:flex-row flex-col items-center self-center'>
        <HomeIcon className='w-5'></HomeIcon>
        <p className='pl-2 md:text-[1.1vw] text-[1.8vw] md:text-base pt-1'>{banos} Baños</p>
      </div>
    </div>
    <div className='flex-1 h-[90%] my-1 mx-1  grid grid-cols-1 gap-4 place-items-center border-l-2 border-gray-300'>
      <div className='flex md:flex-row flex-col items-center self-center'>
        <HomeIcon className='w-5'></HomeIcon>
        <p className='pl-2 md:text-[1.1vw] text-[1.8vw] md:text-base pt-1'>{medidad} m²</p>
      </div>
    </div>
  </div>
  )
}

export default InfoPrincipal