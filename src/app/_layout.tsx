"use client"
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import ColorModeButton from "@/features/theme/components/ColorModeButton";
import { GithubIcon } from "@/assets/icons";

export const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main className="text-foreground bg-background">
      <Navbar className="shadow-sm">
        <NavbarBrand>
          <p>Julian Gonzalez</p>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem><Link href="#home">// home</Link></NavbarItem>
          <NavbarItem><Link href="#skills">// skills</Link></NavbarItem>
          <NavbarItem><Link href="#projects">{"// projects"}</Link></NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem>
            <Button isIconOnly variant="light">
              <Link href="https://github.com/Yuizz" target="_blank">
                <GithubIcon height="1.6rem" width="1.6rem" />
              </Link>
            </Button>
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