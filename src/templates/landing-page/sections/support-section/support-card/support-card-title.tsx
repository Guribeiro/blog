import { ComponentProps } from "react"

type SupportCardTitleProps = ComponentProps<'strong'>

export const SupportCardTitle = ({ children, ...props }: SupportCardTitleProps) => {
  return (
    <strong className="text-heading-sm text-gray-100" {...props}>
      {children}
    </strong>
  )
}