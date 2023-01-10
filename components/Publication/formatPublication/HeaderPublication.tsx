import React, { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import InfoPrincipal from '../particles/InfoPrincipal';
import { Dropdown } from 'flowbite-react';
import { useGlobalContext } from '../../../app/Context/store';
import { publicationFormat } from '../../../utils/interfaces/publicationFormat';
import SchemaInsertPublication from '../formatInsertPublication/SchemaInsertPublication';
import ModalUtil from '../../../utils/ModalUtil';
import Link from 'next/link';
import { CONFIG } from '../../../utils/Config/host';

type Props = {
    comment?: string;
    date: Date;
    nameUser: string;
    title?: string;
    banos?: number;
    habitaciones?: number;
    medidad?: number;
    renderData: any;
    setRenderData: any;
    identity: any;
    valueUpdate: publicationFormat;
    renderPublication: any;
    setRenderPublication: any;
    userName: any;
    foto: any;
}

const HeaderPublication = (props: Props) => {
    const { comment, date, nameUser, foto, title, banos, habitaciones, medidad, identity, renderData, setRenderData, valueUpdate, userName, renderPublication, setRenderPublication } = props;
    const [data, setData] = useState<boolean>(false);
    const { equalUser, setIsEqualUser } = useGlobalContext();
    useEffect(() => {
      
    
      return () => {
        
      }
    }, [renderPublication])
    
    /*
        const dia = ((date).getDate().toString().length > 1)
            ? date.getDate().toString()
            : "0" + date.getDate().toString();
    
        const fecha = dia + "/" + date.getMonth() + "/" + date.getFullYear();
        console.log(equalUser+ " ..............estp.............")
        */
    return (
        <div className='px-2 py-2 rounded-t-lg'>
            {!equalUser && <ModalUtil data={data} setData={setData} setRenderData={setRenderData} renderData={renderData} valueUpdate={valueUpdate} identity={identity} renderPublication={renderPublication} setRenderPublication={setRenderPublication}/>}
            <div className='w-full  flex flex-row mb-2'>
                <div className='w-11 h-11 relative'>
                    <Link href={`${CONFIG.hostSelf}/social/profile/${userName}`}>
                        <Image src={foto || '/foto1.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-200 cursor-pointer'></Image>
                    </Link>
                </div>
                <div className=' text-opacity-90 text-black pl-2 pt-[5px]'>
                    <p className='h-[0.9rem] text-sm font-bodyFont font-light'>{nameUser}</p>
                    <p className='h-[0.9rem] text-[0.80rem] font-extralight'>{date.toString()}</p>

                </div>
                {!equalUser && <div className='flex-auto flex justify-end'>
                    <div>
                        <Dropdown
                            label="Acciones"
                            inline={true}
                        >
                            <Dropdown.Item onClick={() => {
                                setData(true);
                            }}>
                                Editar
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Eliminar
                            </Dropdown.Item>

                        </Dropdown>
                    </div>
                </div>}
            </div>

            <div className='my-1 font-bodyFont'>
                <p>{title}</p>
            </div >
            <div className='my-1'>
                <p>{comment}</p>
            </div >
            <InfoPrincipal banos={banos} habitaciones={habitaciones} medidad={medidad} />
        </div>
    )
}

export default (HeaderPublication)