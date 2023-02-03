"use client"
import { Alert, Tabs } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'

import { HashtagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import SectionPublication from './publications/SectionPublication'
import FormRegister from '../Login/FormRegister'
import SectionUpdate from './publications/SectionUpdate'
import SectionInformation from './publications/SectionInformation';
import SectionContact from './publications/SectionContact';
import { QueryLogin } from '../../utils/Queries/User/LoginQueries';
import { useGlobalContext } from '../../app/Context/store';
import ShowPublicationLikes from '../Publication/typesShowPublication/ShowPublicationLikes'
import ShowPublicationRecomendation from '../Publication/typesShowPublication/ShowPublicationRecomendation'

type Props = {
    profile: string
}

const TabsProfile = (props: Props) => {
    const { profile } = props;

    const { equalUser, setIsEqualUser, fotoUser, setFotoUser } = useGlobalContext();


    const checkUser = async () => {
        const response = await QueryLogin.checkUser();
        console.log("respuesta del check................")
        console.log(response)
        if (response != null || response != undefined) {
            setIsEqualUser(response['data']['checkUser'][0] != profile);
            console.log("response ..............")
            console.log(profile)
            console.log(response['data']['checkUser'][0])
        }
        console.log("response ..... Joel")
        console.log(response)
    };

    useEffect(() => {
        checkUser();

    }, []);

    return (

        <div className='h-full drop-shadow-lg overflow-auto max-h-screen'>
            <Tabs.Group
                aria-label="Tabs with icons"
                style="underline"

            >
                <Tabs.Item
                    title="PUBLICACIONES"
                    icon={UserCircleIcon}
                    active={true}
                >
                    <SectionPublication profile={profile} />


                </Tabs.Item>


                <Tabs.Item
                    title="ACTUALIZACIÓN DE DATOS"
                    icon={UserCircleIcon}

                >
                    {!equalUser &&
                        <SectionUpdate />}
                    {equalUser &&
                        <Alert
                            color="failure"
                            icon={UserCircleIcon}
                        >
                            <span>
                                <span className="font-medium">
                                    Alerta!
                                </span>
                                {' '}Solo la persona dueña de la cuenta puede hacer cambios.
                            </span>
                        </Alert>}
                </Tabs.Item>

                {/* <Tabs.Item
                    title="INMUEBLES"
                    icon={UserCircleIcon}
                >
                    <SectionInformation />
                </Tabs.Item> */}
                <Tabs.Item
                    title="AMIGOS"
                    icon={UserCircleIcon}
                >
                    <SectionContact profile={profile} />
                </Tabs.Item>

            </Tabs.Group>
        </div>

    )
}

export default TabsProfile