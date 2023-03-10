"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DocumentTextIcon, HomeIcon, UserPlusIcon, UserMinusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Button, Rating } from 'flowbite-react'
import { useGlobalContext } from '../../app/Context/store'
import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import { QueryLogin } from '../../utils/Queries/User/LoginQueries'
import { registerFriendly } from '../../utils/interfaces/registerFriendly'
import { QueryRegister } from '../../utils/Queries/User/RegisterQuery'
import ReviewStatus from './Friends/ReviewStatus';
type Props = {
    fullName: string;
}

const CardProfile = (props: Props) => {
    const { fullName } = props;
    const [render, setRender] = useState(false);
    const { equalUser, setIsEqualUser, fotoUser, setFotoUser, user } = useGlobalContext();
    const [confirmFriendly, setConfirmFriendly] = useState<string>();

    const checkFriend = async () => {
        const response = await QueryLogin.getStatusFriendly(fullName);
        if (response != null || response != undefined) {
            setConfirmFriendly(response['data']['findConfirmFriend']);
            console.log('status ...')
            console.log(response['data']['findConfirmFriend']);
        }
        console.log("response ..... Joel")
        console.log(response)
    };

    useEffect(() => {
        setRender(true);
        checkFriend();
    }, []);
    if (!render) {
        return null;
    }

  
    return (
        <div>
            <div className=' bg-white h-fit pt-4 m-auto md:m-0 drop-shadow-lg'>
                <div className='w-[42%] h-[110px] relative m-auto'>
                    <Image src={fotoUser || '/usuario.png'} alt={'Hola'} fill className='rounded-full cursor-pointer'></Image>
                </div>
                <p className='text-center lg:text-xl text-sm font-bodyFont tracking-[.15em] pt-3 text-gray-600'>{fullName}</p>

                {/* <p className='text-center text-sm font-bodyFont tracking-[.15em] pt-3 text-gray-600'>Cliente jvelasco</p> */}

                {/* <div className='flex justify-center'>
                    <Rating className='m-auto'>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4.95 out of 5
                        </p>
                    </Rating>
                </div> */}
                <div className='flex flex-col divide-y divide-dashed mt-7 '>
                    {/* <Link href={{
                        pathname: '/social',

                    }}>
                        <div className='w-full h-9 flex  items-center hover:bg-blue-500 hover:text-white cursor-pointer text-blue-600' >
                            <HomeIcon className='w-6 ml-8 fill-blue-600 stroke-white' ></HomeIcon><p className='pl-3 text-md md:text-sm lg:text-md'>Inicio</p>
                        </div>
                    </Link>
                    <div className='w-full h-9 flex  items-center hover:bg-blue-500 cursor-pointer hover:text-white text-blue-600'>
                        <WrenchIcon color='text-blue-600' className='w-6 ml-8 fill-blue-600 stroke-white' ></WrenchIcon><p className='pl-3 text-md md:text-sm lg:text-md'>Ajustes</p>
                    </div> */}
                    {/* <div className='w-full h-9 flex  items-center hover:bg-blue-500 cursor-pointer hover:text-white text-blue-600'>
                        <DocumentTextIcon color='text-blue-600' className='w-6 ml-8 fill-blue-600 stroke-white'></DocumentTextIcon><p className='pl-3 text-md md:text-sm lg:text-md'>Chat</p>
                    </div> */}
                    <div className='flex flex-col items-center text-xs p-3'>
                        {equalUser && <ReviewStatus userName={fullName} foto={fotoUser} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProfile