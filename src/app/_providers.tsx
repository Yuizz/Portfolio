"use client"
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}