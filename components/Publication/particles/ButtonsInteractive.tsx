'use client'
import { ChatBubbleLeftRightIcon, HandRaisedIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { QueryPublication } from '../../../utils/Queries/Publication/PublicationsQueries';


type Props = {
  abrirComentario: any;
  setAbrirComentario: any;
  idPublication: number
}

const ButtonsInteractive = ({ abrirComentario, setAbrirComentario, idPublication }: Props) => {
  const [renderView, setRenderView] = useState<boolean>(false);
  const [numberLikes, setNumberLikes] = useState<number>(0);
  const [checkLikes, setCheckLikes] = useState<boolean>(false);
  const getCounts = async (idPublication: number) => {
    console.log("El conteo de likes es ..................................."+idPublication)
    const response = await QueryPublication.publicationCountLike(idPublication);

    if (!response) {
      //ErrorNotification.errorNotificationLogin("Lo lamentamos no se encontraron datos");
      setNumberLikes(0);
      return;
    }
    setNumberLikes(response['data']['countLike']);
   const response2 = await QueryPublication.publicationCheckLike(idPublication);
    setCheckLikes(response2['data']['checkLike']);
  };

  const accionLike = async (idPublication: number) => {
    const response = !checkLikes ? await QueryPublication.publicationCreateLike(idPublication) :
      await QueryPublication.publicationDeleteLike(idPublication);
    if (!response) {
      //ErrorNotification.errorNotificationLogin("Lo lamentamos no se encontraron datos");
      return;
    }
    setRenderView(!renderView);
  }
  useEffect(() => {
    getCounts(idPublication);

    return () => {

    }
  }, [renderView])

  return (
    <>        <div className='pl-2 md:text-base text-xs'>
      <p> Publicación con {numberLikes} me gusta</p>
    </div>
      <div className='flex items-center h-[30px] bg-blue-100'>

        <div className={'flex-1 cursor-pointer rounded-lg h-[90%] my-3 hover:bg-slate-300 mx-1  grid grid-cols-1 gap-4 place-items-center ' + (checkLikes ? 'bg-slate-300' : '')}
          onClick={(e: any) => {
            e.preventDefault();
            console.log("Click en me gusta ..........");
            accionLike(idPublication);
          }}>
          <div className='flex flex-row items-center self-center  md:text-base text-xs'>
            <HandRaisedIcon className='w-5'></HandRaisedIcon>
            <p className=' pl-2'>Me gusta</p>
          </div>

        </div>
        <div className='flex-1 cursor-pointer rounded-lg h-[90%] my-3 hover:bg-slate-300 mx-1  grid grid-cols-1 gap-4 place-items-center'
          onClick={(e: any) => {
            e.preventDefault();

            setAbrirComentario(!abrirComentario);
          }}>
          <div className='flex flex-row items-center self-center md:text-base text-xs'>
            <ChatBubbleLeftRightIcon className='w-5'></ChatBubbleLeftRightIcon>
            <p className=' pl-2'>Comentar</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ButtonsInteractive