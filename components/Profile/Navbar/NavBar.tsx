import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../../app/Context/store';
import { getToken } from '../../../utils/Localstorage/ManageLocalStorage.User';
import { clearToken } from '../../../utils/Token/ClearToken';

import { globalUser } from '../../../utils/interfaces/globalUser';
import Link from 'next/link';

type Props = {}

const NavBar = (props: Props) => {
    const [user, setUser] = useState<globalUser>();

    const getUser = () => {
        const user = getToken();
        const { addressEmail, fullName, userName, foto } = user;
        setUser({ addressEmail, fullName, userName, foto });
    }

    useEffect(() => {

        getUser();
        return () => {

        }
    }, [])

    const router = useRouter();
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                color='blue'

            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Waroom
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={`${user?.foto || "https://flowbite.com/docs/images/people/profile-picture-5.jpg"}`} rounded={true} />}
                    >
                        <div className='relative'>
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    {user?.fullName}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {user?.addressEmail}
                                </span>
                            </Dropdown.Header>
                            <Link href={`/social/profile/${user?.userName}`}>
                                <Dropdown.Item>
                                    Perfil
                                </Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Link href={`/social/recomendation`}>
                                <Dropdown.Item>
                                    Recomendaciones
                                </Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Link href={`/social/likes`}>
                                <Dropdown.Item>
                                    Almacen de likes
                                </Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={async () => {
                                await clearToken();
                                router.replace('/login')
                            }}>
                                Desconectar
                            </Dropdown.Item>
                        </div>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {/* <Link href={'/social'}>
                        <Navbar.Link
                            active={true}
                        >
                            INICIO
                        </Navbar.Link>
                    </Link> */}

                    <Link href={'/social/rent'}>
                        <Navbar.Link>
                            <h1 className='font-bodyFont text-base'>ARRIENDO</h1>
                        </Navbar.Link>
                    </Link>
                    <Link href={'/social/sale'}>
                        <Navbar.Link>
                            <h1 className='font-bodyFont text-base'>VENTA</h1>
                        </Navbar.Link>
                    </Link>
                    <Link href={'/social/friendSearch'}>
                        <Navbar.Link>
                            <h1 className='font-bodyFont text-base'>BUSCAR AMIGOS</h1>
                        </Navbar.Link>
                    </Link>

                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}

export default NavBar