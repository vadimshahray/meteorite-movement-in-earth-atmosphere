import { SvgIconTypeMap, Typography } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { PropsWithChildren } from 'react'
import { Container } from './Container'

export type SectionProps = {
  title: string
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
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
