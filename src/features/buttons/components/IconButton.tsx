import { Button, ButtonProps } from "@nextui-org/react";

export type IconButtonProps = {
  children: React.ReactNode,
} & ButtonProps

export default function IconButton({ children, ...props }: IconButtonProps) {

  return (
    <Button isIconOnly variant="light" {...props}>
      {children}
    </Button>
  )
}