import { ComponentProps } from "react"

type SupportCardIconProps = ComponentProps<'div'>

export const SupportCardIcon = ({ children, ...props }: SupportCardIconProps) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}