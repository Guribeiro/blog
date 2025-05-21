import { ComponentProps } from "react"

import { SupportCardContainer } from './support-card-container'
import { SupportCardIcon } from './support-card-icon'
import { SupportCardTitle } from './support-card-title'
import { SupportCardDescription } from './support-card-description'

type SupportCardProps = {
  title: string
  description: string
  icon: React.ReactNode
} & ComponentProps<'div'>



export const SupportCard = ({ title, description, icon, ...props }: SupportCardProps) => {
  return (
    <SupportCardContainer {...props}>
      <SupportCardIcon>
        {icon}
      </SupportCardIcon>
      <SupportCardTitle>
        {title}
      </SupportCardTitle>
      <SupportCardDescription>{description}</SupportCardDescription>
    </SupportCardContainer>
  )
}