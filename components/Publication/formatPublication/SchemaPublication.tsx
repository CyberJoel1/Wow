"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import HeaderPublication from './HeaderPublication';
import FooterPublication from './FooterPublication';
import SliderInteractive from '../particles/SliderInteractive';
import { registerFormat } from '../../../utils/interfaces/registerFormat';
import { publicationFormat } from '../../../utils/interfaces/publicationFormat';
import { PublicationQueries } from '../../../utils/Queries/User/PublicationQueries';
import { QueryPublication } from '../../../utils/Queries/Publication/PublicationsQueries';
type Props = {
  title: string;
  photos: any[];
  comment: string;
  fechaCreacion: Date;
  habitaciones: number;
  banos: number;
  medida: number;
  meGusta?: number;
  comentarios?: any;
  renderData?: any;
  setRenderData?:any;
  identity?:any;
  longitud:number;
  latitud:number;
  tipo:any;
  userName: any;
  nameUser: any;
  foto:any;
}

const SchemaPublication = (props: Props) => {
  const [render, setRender] = useState(true);
  const [dataPublication, setDataPublication] = useState<publicationFormat>({});
  const renderPublication= (valor:boolean)=>{
    console.log("paso por aqui tu render")
    setRender(!render);
  }

  const updatePublication = async (id:number) => {
    const response = await QueryPublication.findOnePublication(id);
    
    if(!response){
        return;
    }
    const {banos,photos,habitaciones,latitud,longitud,medida,mensaje,tipo,titulo} = response['data']['publicationOne'];
    console.log("fotos: publication "+photos)
    setDataPublication({banos:banos,fotos:photos,habitaciones:habitaciones,latitud:latitud
      ,longitud:longitud,medida:medida,mensaje:mensaje,tipo:tipo,titulo:titulo});
  };


  useEffect(() => {
    console.log("aqui esta fuera "+render);
    if(!render){
      console.log("aqui esta adentro "+render)
      updatePublication(identity);
      setRender(true);
    }

  }, [render])
  




  const { title, photos, comment, fechaCreacion, comentarios, banos, habitaciones, meGusta, medida, renderData,setRenderData, identity,latitud,longitud, tipo, userName, nameUser, foto } = props;
  let valueUpdate: publicationFormat={titulo:title,banos:banos, habitaciones:habitaciones, latitud:latitud, longitud:longitud, medida:medida, mensaje:comment,tipo:tipo, fotos:[] };
  return (
    <div className=''>
      <div className='p-4 rounded-lg border-solid border-2 border-indigo-200'>

        <HeaderPublication comment={comment} date={fechaCreacion} userName={userName}
          nameUser={nameUser} title={dataPublication.titulo || title} banos={ dataPublication.banos || banos} habitaciones={dataPublication.habitaciones || habitaciones}
          medidad={dataPublication.medida || medida} renderData={renderData} renderPublication={render} setRenderPublication={renderPublication} setRenderData={setRenderData} identity={identity} valueUpdate={valueUpdate} foto={foto}/>
          
        {/* <div className='w-full h-[270px] relative mb-2'>

         <Image src={photo || './foto1.jpg'} alt={'Hola'} fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"></Image> 
              

      </div> */}

        <SliderInteractive size='h-[350px] md:h-[320px]' photos={dataPublication.fotos || photos} 
        latitud={dataPublication.latitud || latitud} 
        longitud={dataPublication.latitud || longitud}/>

        <div className='pl-2'>
          <p> Publicación con {meGusta} me gusta</p>
        </div>
        <FooterPublication />
      </div>
    </div>
  )
}

export default SchemaPublication