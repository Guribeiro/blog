import { ComponentProps } from "react"

type SupportCardDescriptionProps = ComponentProps<'p'>

export const SupportCardDescription = ({ children, ...props }: SupportCardDescriptionProps) => {
  return (
    <p className="text-body-sm text-gray-200" {...props}>{children}</p>
  )
}