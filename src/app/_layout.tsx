"use client"
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <p>Yuizz Portfolio</p>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem><Link href="#home">Home</Link></NavbarItem>
          <NavbarItem><Link href="#skills">Skills</Link></NavbarItem>
          <NavbarItem><Link href="#projects">Projects</Link></NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem>
            <Button>Github</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  )
}