'use client'
import { Breadcrumb, Label, TextInput } from 'flowbite-react'
import { BeakerIcon, CalculatorIcon, HomeModernIcon, MoonIcon, UsersIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import RowFilterUser from '../../../../components/Filter/User/RowFilterUser'
import { QueryLogin } from '../../../../utils/Queries/User/LoginQueries'

type Props = {}

const page = (props: Props) => {
    const [users,setUsers] = useState<any>();
    const [filterString,setFilterString] = useState<string>();

    const getAllFilter = async (filter?:string) => {
        const response = await QueryLogin.getFiltersPerson(filter ||"");

        if (!response) {
            //ErrorNotification.errorNotificationLogin("Lo lamentamos no se encontraron datos");
            setUsers([]);
            return;
        }
        setUsers(response['data']['matchUser']);
    };

    useEffect(() => {
      
        getAllFilter(filterString);
      return () => {
        
      }
    }, [filterString])

    const listUsers = users?.map((element:any) => {
        const {fullName,addressEmail,id, userName} = element;
        const elementFoto = element['foto'] == null?'/perfil.jpg':element['foto'];
        let splitFullName = fullName.split(' ');
        let fullNameRes= splitFullName[0]+' '+splitFullName[2];
        return (
          
            <RowFilterUser foto={elementFoto} fullName={fullName} email={addressEmail} userName={userName} />
          )
      });
    return (
        <div className='bg-slate-50 min-h-screen'>

            <div className='md:w-[55%] w-[90%] m-auto'>
                <h1>Buscar personas</h1>
                <div>
                    <div className="mb-2 block">
                    </div>
                    <TextInput
                        id="email4"
                        type="email"
                        icon={UsersIcon}
                        placeholder="Nombre de la persona"
                        required={true}
                       onChange={(e:any)=>{
                        clearTimeout(undefined);
                        setTimeout(()=>{
                            setFilterString(e.target.value);
                        },2000);
                       }}
                    />
                </div>
                <div className='bg-blue-100 p-4'>
                    {listUsers}
                </div>
            </div>
        </div>
    )
}

export default page