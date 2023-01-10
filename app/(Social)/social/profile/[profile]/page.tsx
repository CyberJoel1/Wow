'use client'
import React, { useEffect, useState } from 'react'
import CardProfile from '../../../../../components/Profile/CardProfile';
import TabsProfile from '../../../../../components/Profile/TabsProfile';
import { useGlobalContext } from '../../../../Context/store';
import { QueryLogin } from '../../../../../utils/Queries/User/LoginQueries';
import { ErrorNotification } from '../../../../../utils/SweetLibrary/ErrorNotification';
import { useRouter } from 'next/navigation';


type Props = {}

const profilePage = ({params,}: { params: { profile: string };}) => {
    const router = useRouter();

    const { profile } = params;
    const { setRenderProfile, renderProfile, setFotoUser, fotoUser } = useGlobalContext();
    


    const getDataProfile = async () => {
        const response: any = await QueryLogin.getDataProfile(profile);
        if (response != null) {
            
            setFotoUser(response['data']['getDataProfile']['foto']);
            
            return;
        }
    };
    useEffect(() => {
        getDataProfile();

        return () => {

        }
    }, [renderProfile])


    
    return (
        <div>
        
        <div className='bg-slate-50 h-screen grid grid-cols-8 gap-4 w-full max-h-screen md:overflow-hidden overflow-visible'>
            <div className='p-3 col-span-8 md:col-span-2  max-h-full'>

                <CardProfile fullName={profile} />
            </div>
            <div className='p-3 md:col-span-6 col-span-8 max-h-full '>
                <TabsProfile profile={profile} />
            </div>
        </div>
        </div>
    )
}

export default profilePage