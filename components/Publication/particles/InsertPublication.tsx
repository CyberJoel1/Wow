'use client'
import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { TextInput } from 'flowbite-react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
type Props = {
    setData: Dispatch<SetStateAction<boolean>>;
    data: boolean;
}


const InsertPublication = (props: Props) => {
    const {data, setData} = props;
    const oNClick = ()=>{
        setData(!data);
    }
    return (
        <div className='w-full  flex flex-row mb-2'>
            <div className='w-11 h-11 relative'>

                <Image src={'/foto1.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-200 cursor-pointer'></Image>
            </div>
            <div className=' text-opacity-90 text-black ml-1 p-1 grow h-full font-sans'>
            <input type="text" id="last" name="last" placeholder='Publica tu inmueble' className='rounded-full w-full h-8 bg-blue-50' onClick={oNClick} />

            </div>

        </div>
    )
}

export default InsertPublication