"use client"
import React from 'react'
import ShowPublicationRecomendation from '../../../../components/Publication/typesShowPublication/ShowPublicationRecomendation'
import { getToken } from '../../../../utils/Localstorage/ManageLocalStorage.User'

type Props = {}

const page = (props: Props) => {
    const {userName} =getToken();
  return (
    <div>
        <h2 className='text-center font-bodyFont pt-5 text-slate-700'>Publicaciones recomendadas</h2>
        <ShowPublicationRecomendation profile={userName} />
    </div>
  )
}

export default page