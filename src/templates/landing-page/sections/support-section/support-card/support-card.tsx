import { ComponentProps } from "react"

import { tv } from 'tailwind-variants';

type SupportCardProps = {
  title: string
  description: string
  icon: React.ReactNode
} & ComponentProps<'div'>


const card = tv({
  slots: {
    base: 'flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300',
  }
});

export const SupportCard = ({ title, description, icon, ...props }: SupportCardProps) => {
  return (
    <div className="" {...props}>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
        {icon}
      </div>
      <strong className="text-heading-sm text-gray-100">
        {title}
      </strong>
      <p className="text-body-sm text-gray-200">{description}</p>
    </div>
  )
}