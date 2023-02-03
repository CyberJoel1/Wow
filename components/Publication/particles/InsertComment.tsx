import React, { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import { TextInput } from 'flowbite-react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { CommentsQueries } from '../../../utils/Queries/Comments/CommentsQueries';
import { registerComments } from '../../../utils/interfaces/registerComment';

type Props = {
    userName: string,
    idPublication: number,
    foto: any
    registerNewComments:any
}



const InsertComment = (props: Props) => {
    const { userName, foto, idPublication, registerNewComments } = props;
    const [comment, setComment] = useState<any>();
    console.log(foto);

    const registerComments = async (data: registerComments) => {
        console.log("LA DATA: "+data.comment)
        const response = await CommentsQueries.registerComments(data);
        console.log(response);
        if (!response) {
            registerNewComments();
            setComment('');
            return;
        }
        
        return;
    };


    return (
        <div className='w-full  flex flex-row mb-2'>
            <div className='w-11 h-11 relative'>

                <Image src={foto} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-200 cursor-pointer'></Image>
            </div>
            <div className=' text-opacity-90 text-black ml-1 p-1 grow h-full font-sans'>
                <input type="text" id="last" name="last" placeholder='Escribe un comentario...' className='rounded-full w-full min-h-text-[0.80rem]  text-justify text-base break-all h-auto'
                    value={comment}
                    onChange={(e: any) => {
                        e.preventDefault();
                        setComment(e.target.value);
                    }} />

            </div>
            <button className='w-fit p-2 text-center bg-slate-300 flex hover:bg-slate-400 cursor-pointer h-9 text-black rounded-lg' onClick={(e: any) => {
                e.preventDefault();
                registerComments({ idPublication: idPublication, comment: comment });
            }}>

                <p className='self-center'
                >Publicar</p>
            </button>
        </div>
    )
}

export default InsertComment