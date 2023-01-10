'use client'
import { Carousel } from 'flowbite-react'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import MapaLocalization from '../../mapas/MapaLocalization';


type Props = {
  size: string;
  photos: any[];
  latitud: number;
  longitud:number
}

const SliderInteractive = (props: Props) => {
  const { size, photos, latitud, longitud } = props;
  const [position, setPosition]= useState<any>({latitud,longitud});
  console.log("la latitud es "+position.latitud+"  prin");
  console.log("la longitud es: "+position.longitud+"   prin")
  const router = useRouter();
  function transfer(): void {
    router.push('/social/gallery');
  }

  const listImagesSlider = photos?.map((url: string) => {
    const urlImage = url.substring(0, url.length)

    return <Image src={urlImage} alt={''} width={500} height={500} className='!h-full' onDoubleClick={transfer} />
  });

  const MapaLocalization = dynamic(() => import('../../mapas/MapaLocalization'), {
    loading: () => <div className='h-full'></div>,
    ssr: true,

  })
  return (
    <div className={size.concat(' grid grid-rows-2 grid-cols-2')}>
      <div className='col-span-2 md:col-span-1 md:row-span-2 row-span-1'>
      <Carousel slide={false} indicators={true}  >

        {listImagesSlider}
        {/* <Image src={'http://localhost:3000/7e998cab-f8de-4d66-9ea7-51ec75bc1fe3.jpeg'} alt={''} width={500} height={500} className='!h-full' onDoubleClick={transfer} /> */}
      </Carousel>
      </div>
       <div className='p-3 min-h-full col-span-2 md:col-span-1 md:row-span-2 row-span-1'>
        <p>Localización del inmueble</p>
        <MapaLocalization position={position} setPosition={setPosition}/>
      </div> 
    </div>
  )
}

export default SliderInteractive