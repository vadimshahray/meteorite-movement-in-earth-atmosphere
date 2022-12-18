import { Typography } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Container } from './Container'

export type SectionProps = {
  title: string
  Icon?: Icon
} & PropsWithChildren

export const Section = ({ title, Icon, children }: SectionProps) => {
  return (
    <Container disableGuttersH>
      <Typography variant='subtitle1' display='flex' alignItems='center'>
        {Icon && <Icon sx={{ marginRight: 1 }} />}
        {title}
      </Typography>

      {children}
    </Container>
  )
}
