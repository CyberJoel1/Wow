"use client"
import React from 'react'
import ShowPublicationLikes from '../../../../components/Publication/typesShowPublication/ShowPublicationLikes'
import { getToken } from '../../../../utils/Localstorage/ManageLocalStorage.User';

type Props = {}

const page = (props: Props) => {
    const {userName} =getToken();
  return (
    <div>
        <h2 className='text-center font-bodyFont pt-5 text-slate-700'>Publicaciones con likes tuyos</h2>
        <ShowPublicationLikes profile={userName} />
    </div>
  )
}

export default page