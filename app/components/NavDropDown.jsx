"use client"
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function NavDropDown() {
  const pathname = usePathname()
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

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger color="foreground" className={`navlink ${pathname === '/proffs' ? 'navActivelink' : 'navLink'}`} >
          <Link href="/proffs" className={`${pathname === '/proffs' ? '' : ''}`}>
              Proffs
              </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="dropcontent">
            <ul className=" w-36 text-center px-2 py-1 flex-col gap-1 flex ">
              {Links.map((item) => (
                <li
                  className={pathname === item.link ? 'navDropDown' : 'navDropActive'}
                >
                  <Link
                    key={item.key}
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  );
}
