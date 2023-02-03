import { Spinner } from 'flowbite-react';
import React, { Dispatch, SetStateAction, useEffect, useState, useTransition } from 'react'
import { QueryUpdater } from '../../../utils/Queries/User/UpdateQuery';

type Props = {
    fullName: string;
    email: string;
    idRelation: number;
    foto: string;
    setRenderReview:Dispatch<SetStateAction<boolean>>;
    renderReview:boolean;
    idReceived:number;
    startTransition:Dispatch<SetStateAction<any>>;
    setIsFetching:Dispatch<SetStateAction<any>>;
    userName:string
}

const RequestRowFriend = (props: Props) => {
    const { email, fullName, idRelation, foto,renderReview,setRenderReview,idReceived,setIsFetching,startTransition,userName } = props;

 
        const postDelelete = async (userName: string) => {
            setIsFetching(true);
            const query = await QueryUpdater.deleteFriendlyUser(userName);
            setIsFetching(false);
            startTransition(() => {
                // Refresh the current route and fetch new data from the server without
                // losing client-side browser or React state.
                setRenderReview(!renderReview);
            });
            console.log("Info valiosa .... " + JSON.stringify(query));
            //setRenderReview(!renderReview);
      
        }
        const postAccept = async (id: number) => {
            setIsFetching(true);
            const query = await QueryUpdater.updateConfirmRequest(id);
            setIsFetching(false);
            startTransition(() => {
                // Refresh the current route and fetch new data from the server without
                // losing client-side browser or React state.
                setRenderReview(!renderReview);
            });
            console.log("Info valiosa .... " + JSON.stringify(query));
            //setRenderReview(!renderReview);
      
        }
        useEffect(() => {


            return () => {

            }
        }, [])


   
    return (
        <div className=''>
         <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <img
                        className="h-8 w-8 rounded-full"
                        src={foto}
                        alt="Bonnie image"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {fullName}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {email}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <div
                        onClick={(e:any)=>{
                            e.preventDefault();
                            postAccept(idRelation);
                        }}
                        className="rounded-lg bg-blue-500 md:px-1 md:py-0 py-2 lg:py-2  text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
                    >
                        Aceptar
                    </div>
                    <div
                        onClick={(e:any)=>{
                            e.preventDefault();
                            postDelelete(userName);
                        }}
                        className="rounded-lg bg-red-500 md:px-1 md:py-0 py-2 lg:py-2  text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
                    >
                        Rechazar
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default RequestRowFriend