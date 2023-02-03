import { Button, Navbar } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'


type Props = {}

const NavbarHome = (props: Props) => {
  return (
    <div>
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="./iconWar.png"
      className="mr-3 h-6 sm:h-9"
      alt="Waroom Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Waroom
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Link href={'/login'}>
    <Button>
      Inicia sesión
    </Button>
    </Link>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>

  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default NavbarHome