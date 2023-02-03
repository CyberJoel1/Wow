import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { QueryLogin } from '../../../utils/Queries/User/LoginQueries';


type Props = {
    foto:string;
    fullName:string;
    email:string;
    userName:string;
}

const RowFilterUser = (props: Props) => {
    const {email,foto,fullName,userName} = props;

    
  return (
    <div>
                    <div className="flex items-center space-x-4 p-4">
                <div className="shrink-0">
                    <img
                        className="h-16 w-16 rounded-xl"
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

                    <Link href={`/social/profile/${userName}`}>
                    <div
                       
                        className="md:w-44 w-12 rounded-lg bg-blue-700 md:px-1 md:py-0 py-2 lg:py-2  text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Ir al perfil
                    </div>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default RowFilterUser