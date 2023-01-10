import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../../app/Context/store';
import { getToken } from '../../../utils/Localstorage/ManageLocalStorage.User';
import { clearToken } from '../../../utils/Token/ClearToken';

import { globalUser } from '../../../utils/interfaces/globalUser';

type Props = {}

const NavBar = (props: Props) => {
    const [user,setUser]=useState<globalUser>();

    const getUser= ()=>{
        const user = getToken();
        const {addressEmail,fullName,userName,foto} = user;
        setUser({addressEmail,fullName,userName,foto});
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
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.fullName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.addressEmail}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item onClick={()=>{
                            router.push('/social/profile/'+user?.userName)
                        }}>
                            Perfil
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={async ()=>{
                        await clearToken();
                        router.replace('/login')
                        }}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        INICIO
                    </Navbar.Link>
                    <Navbar.Link>
                        ARRIENDO
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        VENTA
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        BUSCAR AMIGOS
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar