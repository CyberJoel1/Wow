import { DocumentTextIcon, UserMinusIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import { Spinner } from 'flowbite-react';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState, useTransition } from 'react'
import { useGlobalContext } from '../../../app/Context/store';
import { registerFriendly } from '../../../utils/interfaces/registerFriendly';
import { QueryLogin } from '../../../utils/Queries/User/LoginQueries';
import { QueryRegister } from '../../../utils/Queries/User/RegisterQuery';
import { QueryUpdater } from '../../../utils/Queries/User/UpdateQuery';
import { ChatQueries } from '../../../utils/Queries/Chat/ChatQueries';
import { setDefaultChatStorage } from '../../../utils/Localstorage/LocalStorage.defaultChat';


type Props = {
    userName: any;
    foto: string
}

const ReviewStatus = (props: Props) => {
    const { userName, foto } = props;
    const [renderReview, setRenderReview] = useState<boolean>(false);
    const [relation, setRelation] = useState<any>();
    const [confirmFriendly, setConfirmFriendly] = useState<string>();
    const [isPending, startTransition] = useTransition();
    const { setChatDefault } = useGlobalContext();
    const [isFetching, setIsFetching] = useState(false);
    const router = useRouter();
    // Create inline loading UI
    const isMutating = isFetching || isPending;

    const checkFriend = async () => {
        setIsFetching(true);
        const response = await QueryLogin.getStatusFriendly(userName);
        setIsFetching(false);

        if (response != null || response != undefined) {
            setConfirmFriendly(response['data']['findConfirmFriend']);
            console.log('status ...')
            console.log(response['data']['findConfirmFriend']);

        }
        console.log("response ..... Joel")
        console.log(response)
    };

    const searchRelation = async (profile: string) => {
        const response = await ChatQueries.getConfirmRelation(profile);
        if (!response) {
            return;
        }
        return (response['data']['findConfirmChat']);

    }

    const handleRedirectChat = async (e: any) => {
        e.preventDefault();
        setIsFetching(true);
        let idUsers = await searchRelation(userName);
        setDefaultChatStorage({ addressEmail: userName, foto: foto, idUsers: idUsers });
        router.push("social/chat");
    }
    useEffect(() => {

        checkFriend();
        return () => {

        }
    }, [renderReview])

    function BarOptions() {
        const getRegister = async (data: registerFriendly) => {
            setIsFetching(true);
            const query = await QueryRegister.registerFriendly(data);
            setIsFetching(false);
            startTransition(() => {
                setRenderReview(!renderReview);
            });
            console.log("Info valiosa .... " + JSON.stringify(query));
            //setRenderReview(!renderReview);
        };

        const postDelelete = async (profile: string) => {
            setIsFetching(true);
            const query = await QueryUpdater.deleteFriendlyUser(profile);
            setIsFetching(false);
            startTransition(() => {
                // Refresh the current route and fetch new data from the server without
                // losing client-side browser or React state.
                setRenderReview(!renderReview);
            });
            console.log("Info valiosa .... " + JSON.stringify(query));
            //setRenderReview(!renderReview);
        };

        if (!confirmFriendly) {
            return (null);
        } else if (confirmFriendly == 'proceso') {
            return (<div className='flex flex-row border-solid border-2 border-red-600 hover:bg-red-500 px-2 py-1 rounded-md font-bodyFont bg-orange-100 cursor-pointer'
                onClick={(e: any) => {
                    e.preventDefault();
                    postDelelete(userName);
                }}>
                <UserMinusIcon className='w-[19px]'></UserMinusIcon> <p className='pl-3'> Cancelar solicitud</p>
            </div>);
        } else if (confirmFriendly == 'amistad') {
            return (
                <div className='flex md:flex-row flex-col' >
                    <div className='flex flex-row border-solid border-2 border-red-600 hover:bg-red-500 px-2 py-1 rounded-md font-bodyFont bg-red-400 cursor-pointer'
                        onClick={(e: any) => {
                            e.preventDefault();
                            postDelelete(userName);
                        }}>
                        <UserMinusIcon className='w-[19px]'></UserMinusIcon> <p className='pl-3'> Eliminar amigo</p>
                    </div>
                    <div className='flex flex-row border-solid border-2 border-green-600 hover:bg-green-500 px-2 py-1 rounded-md font-bodyFont bg-green-100 cursor-pointer'
                        onClick={handleRedirectChat}>
                        <DocumentTextIcon className='w-[19px]'></DocumentTextIcon> <p className='pl-3'> Comprar o alquilar</p>
                    </div>
                </div>);
        } else {
            return (<div className='flex flex-row border-solid border-2 border-blue-600 hover:bg-blue-500 px-2 py-1 rounded-md font-bodyFont bg-blue-400 cursor-pointer'

                onClick={(e: any) => {
                    e.preventDefault();
                    let friend: registerFriendly = {
                        userReceived: userName
                    };
                    getRegister(friend);
                }}>
                <UserPlusIcon className='w-[19px]'></UserPlusIcon> <p className='pl-3'> Añadir amigo</p>
            </div>);
        }
    }
    return (
        <div>
            {!isMutating ? <BarOptions /> : <Spinner aria-label="Default status example" />}


        </div>
    )
}

export default ReviewStatus