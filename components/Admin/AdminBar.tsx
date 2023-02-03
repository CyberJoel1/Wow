"use client";
import { Sidebar, Flowbite, Badge } from 'flowbite-react';
import { BeakerIcon, ChartBarIcon, AcademicCapIcon, Battery0Icon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Link from 'next/link';

type Props = {}

const AdminBarComponent = (props: Props) => {
    const router = useRouter();
    const [sidebarChange, setSidebarChange] = useState<boolean>(false);
    return (
        <>

            <Sidebar aria-label="Sidebar with multi-level dropdown example" collapsed={sidebarChange}>

                <div className={'bg-gray-800 pl-[1px]'}>
                    <FontAwesomeIcon className=' cursor-pointer hover:bg-gray-600 duration-300 p-2 inline-block' icon={faBars} color="white" size="2x" onClick={() => {
                        setSidebarChange(!sidebarChange);
                    }} />
                    <h2 className={'inline-block relative left-3 bottom-[12px] text-lg'.concat(sidebarChange ? ' hidden ' : ' ')}>
                        Waroom Admin</h2>

                </div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>

                        {/* <Sidebar.Item
                            href="#"
                            icon={ChartBarIcon}
                        >
                            Users
                        </Sidebar.Item> */}

                        <Sidebar.Collapse label="DENUNCIAS" icon={ExclamationTriangleIcon} >
                            <Link href="/admin/denounce/comment">
                                <Sidebar.Item icon={ExclamationTriangleIcon} >
                                    COMENTARIOS
                                </Sidebar.Item>
                            </Link>
                            <Link href="/admin/denounce/publication">
                                <Sidebar.Item icon={ExclamationTriangleIcon} >
                                    PUBLICACIONES
                                </Sidebar.Item>
                            </Link>
                        </Sidebar.Collapse>




                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )
}

export default AdminBarComponent
