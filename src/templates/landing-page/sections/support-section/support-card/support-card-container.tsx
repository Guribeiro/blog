import { ComponentProps } from "react"

type SupportCardContainerProps = ComponentProps<'div'>

export const SupportCardContainer = ({ children, ...props }: SupportCardContainerProps) => {
  return (
    <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12" {...props}>
      {children}
    </div>
  )
}