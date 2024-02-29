"use client"
import { Image } from '@nextui-org/react'
import React from 'react'
import NextImage from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, button, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Tooltip } from "@nextui-org/react";
import NavDropDown from './NavDropDown';
import Login from './LoginModal';
import { usePathname } from 'next/navigation'

const Links = [
  {
    key: "first proff",
    label: <h1>1<sup>st</sup> Proff</h1>,
    link: "/proffs/proff1"
  },
  {
    key: "Second proff",
    label: <h1>2<sup>nd</sup> Proff</h1>,
    link: "/proffs/proff2"
  },
  {
    key: "Third proff",
    label: <h1>3<sup>rd</sup> Proff</h1>,
    link: "/proffs/proff3"
  },
  {
    key: "Fourth proff",
    label: <h1>4<sup>th</sup> Proff</h1>,
    link: "/proffs/proff4"
  },
  {
    key: "Fifth proff",
    label: <h1>5<sup>th</sup> Proff</h1>,
    link: "/proffs/proff5"
  },
];
function TopNavbar(props) {
  const pathname = usePathname()
  return (
    <Navbar className='border-b border-gray-50/10 py-5'>
      <NavbarContent className="lg:hidden" justify="">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand>
        <Tooltip showArrow={true} content="Pupharma" color='foreground' offset={-6}>
          <Link href="/" >
            <Image
              isBlurred
              src='https://img.playbook.com/-xNC4T-l13Asj1y0JnkUWWe6X9rypjwRXV5U7sLQ9Nk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M0ZmU4NTU0/LTgxNTUtNDU3MS1i/YTc0LWYyNDllOTEw/YzVjYw'
              width={35} height={70} className='w-14 invert' />
            <p className="text-foreground-800 mt-1">Pu Pharma</p>
          </Link>
        </Tooltip>
      </NavbarBrand>
      <NavbarContent className="flex max-md:hidden" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/books" className={`navLink ${pathname === '/books' ? 'bg-purple-500/20' : ''}`}>
            📔Books
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/notes" className={`navLink ${pathname === '/notes' ? 'bg-purple-500/20' : ''}`}>
            📃Notes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <NavDropDown />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contactUs" className={`navLink ${pathname === '/contactUs' ? 'bg-purple-500/20' : ''}`}>
            🦉Contact Us
          </Link>
        </NavbarItem>

      </NavbarContent>
      {/* mobile */}
      <NavbarMenu className='mt-8  '>
        <div className="gap-3 flex-col overflow-scroll">
          <NavbarMenuItem>
            <Link color='foreground' href='/' className={`mblLink ${pathname === '/' ? 'mblLinkActive' : ''}`}>
              🏡Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color='foreground' href='/books' className={`mblLink ${pathname === '/books' ? 'mblLinkActive' : ''}`}>
              📔Books
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color='foreground' href='/notes' className={`mblLink ${pathname === '/notes' ? 'mblLinkActive' : ''}`}>
              📝Notes
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color='foreground' href='/proffs' className={`mblLink ${pathname === '/proffs' ? 'mblLinkActive' : ''}`}>
              ✨Proffs
            </Link>
            <ul className='ml-12 flex flex-col'>
              {Links.map((item) => (
                <li 
                  className={pathname === item.link ? 'navDropDown' : 'navDropActive'}
                >
                  <Link
                    key={item.key}
                    href={item.link}
                    color='foreground'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color='foreground' href='/contactUs' className={pathname === '/contactUs' ? 'mblLinkActive' : 'mblLInks'}>
              ☎️ Contact us
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
      <NavbarContent justify='end'>
        <Login />
      </NavbarContent>
    </Navbar>
  )
}


export default TopNavbar

