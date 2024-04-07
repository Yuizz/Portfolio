import { Button } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@/assets/icons";
import { useTheme } from "next-themes";
import useHasMounted from "@/utils/hasMounted";
import IconButton from "@/features/buttons/components/IconButton";


export default function ColorModeButton({ height = "1.4rem", width = "1.4rem" }: { height?: string, width?: string }) {
  const { theme, setTheme } = useTheme()
  const handleChangeTheme = (currentTheme: string | undefined) => {
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }
  const hasMounted = useHasMounted()

  const props = {
    height,
    width
  }

  if (!hasMounted) return <IconButton><SunIcon {...props} /></IconButton>
  return (
    <Button isIconOnly variant="light" onClick={() => handleChangeTheme(theme)}>
      {theme === "dark" ?
        <SunIcon {...props} />
        :
        <MoonIcon {...props} />
      }
    </Button>
  )

}