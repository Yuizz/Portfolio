"use client"
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import GithubIcon from "@/assets/icons/github";
import ColorModeButton from "@/features/theme/components/ColorModeButton";

export const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main className="text-foreground bg-background">
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
            <Link href="https://github.com/Yuizz">
              <GithubIcon height="1.6rem" width="1.6rem" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <ColorModeButton />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </main>
  )
}