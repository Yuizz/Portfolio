
"use client"
import LightIcon from './github-mark-white.svg'
import DarkIcon from './github-mark.svg'
import { useTheme } from 'next-themes'

export default function GithubIcon({ height = "1.4rem", width = "1.4rem" }: { theme?: string, height?: string, width?: string }) {
  const { theme } = useTheme()

  return theme === "light" ? <DarkIcon height={height} width={width} /> : <LightIcon height={height} width={width} />
}