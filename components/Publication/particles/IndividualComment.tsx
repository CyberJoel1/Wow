import { ChatBubbleLeftRightIcon, HandRaisedIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { UpdateComments } from '../../../utils/SweetLibrary/UpdateComments';
import { CommentsQueries } from '../../../utils/Queries/Comments/CommentsQueries';
import moment from 'moment';
import { DeleteComments } from '../../../utils/SweetLibrary/DeleteComment';
import { ErrorNotification } from '../../../utils/SweetLibrary/ErrorNotification';

type Props = {
    foto: any,
    userName: any,
    comment: any,
    date_created: any,
    idComment: any,
    reRender: any,
    setRerender: any
}

const IndividualComment = (props: Props) => {
    const { foto, userName, comment, date_created, idComment, reRender, setRerender } = props;
    const [commentary, setCommentary] = useState<string>();
    let comment2;
    const date_created_Final = moment(new Date(date_created)).format("DD/MM/YYYY HH:mm:ss");



    const updateComment = async (id: number, comment: string) => {
        const response = await CommentsQueries.updateComments(id, comment);
        console.log(response);
        if (!response) {
            return false;
        }
        setCommentary(comment);
        return true;

    };

    useEffect(() => {


        return () => {

        }
    }, [commentary, setCommentary])

    return (
        <div className='w-full  flex flex-row mb-2'>
            <div className='min-w-[55px] h-11 relative'>

                <Image src={foto || '/foto1.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-100 cursor-pointer'></Image>
            </div>
            <div className=' text-opacity-90 ml-1 p-1 rounded-md pt-[5px] bg-slate-200 px-3'>
                <p className='h-[0.9rem] text-sm font-bodyFont font-extrabold mb-1 tracking-wide text-black'>{userName}</p>
                <p className='md:text-sm text-xs text-justify break-all h-auto  font-semibold font-serif tracking-wide text-slate-800 text-opacity-95'>{commentary || comment}</p>
                <p className='text-[11px]'>{date_created_Final}</p>
                <div className='flex flex-row'>
                    <div className='bg-blue-200 w-9 cursor-pointer text-center flex justify-center hover:bg-blue-300 hover:text-blue-600 text-blue-500 font-bodyFont' onClick={async (e: any) => {
                        e.preventDefault();
                        const valor = await UpdateComments.updateComment(comment);
                        (!valor) ? null : updateComment(idComment, valor);

                    }}>
                        <PencilSquareIcon className='w-[15px] h-max-[10px]'>Actualizar {idComment}</PencilSquareIcon>
                    </div>
                    <div className='bg-red-200 w-9 text-center cursor-pointer flex justify-center hover:bg-red-300 hover:text-red-600 text-red-500' onClick={async (e: any) => {
                        e.preventDefault();

                        
                        const resultado: boolean= await DeleteComments.deleteComment(idComment,userName);
                        if(resultado){
                            ErrorNotification.errorNotificationLogin("No se pudo procesar");
                            setRerender(!reRender);
                        }

                    }}>
                        <TrashIcon className='w-[15px] h-max-[10px]'>Actualizar {idComment}</TrashIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualComment