import { Button } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@/assets/icons";
import { useTheme } from "next-themes";

export default function ColorModeButton() {
  const { theme, setTheme } = useTheme()
  const handleChangeTheme = (currentTheme: string | undefined) => {
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button isIconOnly variant="light" onClick={() => handleChangeTheme(theme)}>
      {theme === "dark" ?
        <SunIcon height="2rem" width="1.4rem" />
        : <MoonIcon width="1.4rem" height="1.4rem" />}
    </Button>
  )

}