import React, { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import InfoPrincipal from '../particles/InfoPrincipal';
import { Avatar, Card, Dropdown } from 'flowbite-react';
import { useGlobalContext } from '../../../app/Context/store';
import { publicationFormat } from '../../../utils/interfaces/publicationFormat';
import SchemaInsertPublication from '../formatInsertPublication/SchemaInsertPublication';
import ModalUtil from '../../../utils/ModalUtil';
import Link from 'next/link';
import { CONFIG } from '../../../utils/Config/host';
import { QueryLogin } from '../../../utils/Queries/User/LoginQueries';
import { PencilSquareIcon, UserMinusIcon, UserPlusIcon, DocumentTextIcon } from '@heroicons/react/24/solid'
import { registerFriendly } from '../../../utils/interfaces/registerFriendly';
import { QueryRegister } from '../../../utils/Queries/User/RegisterQuery';
import ReviewStatus from '../../Profile/Friends/ReviewStatus';
import { DeleteComments } from '../../../utils/SweetLibrary/DeleteComment';
import { DeletePublications } from '../../../utils/SweetLibrary/DeletePublication';
import { DenouncePublications } from '../../../utils/SweetLibrary/CreateDenouncePublication';
import { ErrorNotification } from '../../../utils/SweetLibrary/ErrorNotification';

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
    identity: number;
    valueUpdate: publicationFormat;
    renderPublication: any;
    setRenderPublication: any;
    userName: any;
    foto: any;
}

const HeaderPublication = (props: Props) => {
    const { comment, date, nameUser, foto, title, banos, habitaciones, medidad, identity, renderData, setRenderData, valueUpdate, userName, renderPublication, setRenderPublication } = props;
    const [data, setData] = useState<boolean>(false);
    const [equalUser, setIsEqualUser] = useState<boolean>();
    const [hiddenDenounce, setHiddenDenounce] = useState<boolean>(false);




    const checkUser = async () => {
        const response = await QueryLogin.checkUser();
        console.log("respuesta del check................")
        console.log(response)
        if (response != null || response != undefined) {
            setIsEqualUser(response['data']['checkUser'][0] != userName);
            console.log("response ..............")
            console.log(userName)
            console.log(response['data']['checkUser'][0])


        }
        console.log("response ..... Joel")
        console.log(response)
    };


    useEffect(() => {

        checkUser();



        return () => {

        }
    }, [])




    return (
        <div className='px-2 py-2 rounded-t-lg mb-2 rounded-lg'>
            {!equalUser && <ModalUtil data={data} setData={setData} setRenderData={setRenderData} renderData={renderData} valueUpdate={valueUpdate} identity={identity} renderPublication={renderPublication} setRenderPublication={setRenderPublication} />}
            <div className='w-full  flex flex-row mb-2 px-2'>
                <div className='w-11 h-11 relative'>
                    <>
                        <Link href={`${CONFIG.hostSelf}/social/profile/${userName}`}>
                            <Avatar alt="User settings"
                                img={foto || undefined}
                                rounded={true} /></Link></>


                </div>
                <div className=' pl-2 pt-[3px] font-extralight font-serif tracking-wide'>

                    {equalUser && <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<p className='h-[0.9rem] text-sm font-bodyFont font-light'>{nameUser}</p>}
                    >
                        <Dropdown.Header color='black'>
                            <div>
                                <div className='flex flex-col items-center p-2'>
                                    <ReviewStatus userName={userName} foto={foto} />
                                </div>
                            </div>
                        </Dropdown.Header>


                    </Dropdown>}
                    {!equalUser && <p className='h-[0.9rem] text-sm font-bodyFont font-light'>{nameUser}</p>}
                    <p className='h-[0.9rem] text-[0.80rem] font-extralight'>{date.toString()}</p>

                </div>
                {!equalUser &&
                    <div className='flex-auto flex justify-end'>
                        <div className='p-5'>
                            <Dropdown
                                label={<PencilSquareIcon className='w-[20px]' />}
                                inline={true}
                                arrowIcon={false}
                            >
                                <Dropdown.Item onClick={() => {
                                    setData(true);
                                }}>
                                    Editar
                                </Dropdown.Item>
                                <Dropdown.Item onClick={async () => {
                                    let resultado: boolean = await DeletePublications.deletePublication(identity, userName);
                                    if (resultado) {
                                        setRenderData(!renderData);
                                        DeletePublications.messageDeletePublication();
                                    } else {
                                        ErrorNotification.errorNotificationLogin("No se pudo procesar");
                                    }

                                }}>
                                    Eliminar
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    DenouncePublications.denounceComment(identity, userName);
                                }}>
                                    Denunciar
                                </Dropdown.Item>

                            </Dropdown>
                        </div>
                    </div>}
                {(equalUser && !hiddenDenounce) &&
                    <div className='flex-auto flex justify-end'>
                        <div className='p-5'>
                            <Dropdown
                                label={<PencilSquareIcon className='w-[20px]' />}
                                inline={true}
                                arrowIcon={false}
                            >
                                <Dropdown.Item onClick={async () => {
                                    const response = await DenouncePublications.denounceComment(identity, userName);
                                    if (response) {
                                        DenouncePublications.createDenouncePublication();
                                        setHiddenDenounce(!hiddenDenounce);
                                    } else {
                                        ErrorNotification.errorNotificationLogin("No se pudo procesar");
                                    }

                                }}>
                                    Denunciar
                                </Dropdown.Item>

                            </Dropdown>
                        </div>
                    </div>
                }
            </div>

            <div className='my-1 font-bodyFont text-black text-lg leading-[-12px] px-2'>
                <p>{title}</p>
            </div >
            <div className='my-1 px-2'>
                <p>{comment}</p>
            </div >
            <InfoPrincipal banos={banos} habitaciones={habitaciones} medidad={medidad} />
        </div>
    )
}

export default HeaderPublication