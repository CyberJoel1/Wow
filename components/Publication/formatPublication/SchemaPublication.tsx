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
import { useGlobalContext } from '../../../app/Context/store';
import { getToken } from '../../../utils/Localstorage/ManageLocalStorage.User';
import { globalUser } from '../../../utils/interfaces/globalUser';
import dynamic from 'next/dynamic';
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
  setRenderData?: any;
  identity: any;
  longitud: number;
  latitud: number;
  tipo: any;
  userName: any;
  nameUser: any;
  foto: any;
  addressEmail: string;
}

const SchemaPublication = (props: Props) => {
  const [render, setRender] = useState(true);
  const [dataPublication, setDataPublication] = useState<publicationFormat>({});
  const {fotoUser,user} = useGlobalContext();
  let dataUser:globalUser = getToken();

  const renderPublication = (valor: boolean) => {
    console.log("paso por aqui tu render")
    setRender(!render);
  }

  const updatePublication = async (id: number) => {
    const response = await QueryPublication.findOnePublication(id);

    if (!response) {
      return;
    }
    const { banos, photos, habitaciones, latitud, longitud, medida, mensaje, tipo, titulo } = response['data']['publicationOne'];
    console.log("fotos: publication " + photos)
    setDataPublication({
      banos: banos, fotos: photos, habitaciones: habitaciones, latitud: latitud
      , longitud: longitud, medida: medida, mensaje: mensaje, tipo: tipo, titulo: titulo
    });
  };


  useEffect(() => {
    if (!render) {
      updatePublication(identity);
      setRender(true);
    }
  }, [render])



  

  const { title, photos, comment, fechaCreacion, comentarios, banos, habitaciones, meGusta, medida, renderData, setRenderData, identity, latitud, longitud, tipo, userName, nameUser, foto } = props;
  let valueUpdate: publicationFormat = { titulo: title, banos: banos, habitaciones: habitaciones, latitud: latitud, longitud: longitud, medida: medida, mensaje: comment, tipo: tipo, fotos: [] };
  const splitName =dataUser.fullName.split(' ');
  const newNameUser= splitName[0]+' '+splitName[2]; 
  const splitName2 =nameUser.split(' ');
  const newNameUser2= splitName2[0]+' '+splitName2[2]; 

  return (
    <div className=''>
      <div className='p-4 rounded-lg border-solid border-2 border-gray-300 bg-blue-50 opacity-[.90] font-bodyFont text-black text-opacity-80 shadow-md'>

        <HeaderPublication comment={comment} date={fechaCreacion} userName={userName}
          nameUser={newNameUser2} title={dataPublication.titulo || title} banos={dataPublication.banos || banos} habitaciones={dataPublication.habitaciones || habitaciones}
          medidad={dataPublication.medida || medida} renderData={renderData} renderPublication={render} setRenderPublication={renderPublication} setRenderData={setRenderData} identity={identity} valueUpdate={valueUpdate} foto={foto} />

        {/* <div className='w-full h-[270px] relative mb-2'>

         <Image src={photo || './foto1.jpg'} alt={'Hola'} fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"></Image> 
              

      </div> */}

        <SliderInteractive size='h-[350px] md:h-[320px] rounded-lg bg-sky-50 m-auto w-[98%]' photos={dataPublication.fotos || photos}
          latitud={dataPublication.latitud || latitud}
          longitud={dataPublication.latitud || longitud} />


        <FooterPublication userName={newNameUser} idPublication={identity} foto={dataUser.foto} />
      </div>
    </div>
  )
}

export default SchemaPublication