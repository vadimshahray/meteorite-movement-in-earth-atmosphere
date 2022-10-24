import { SvgIcon } from '@mui/material'
import { Container } from 'components'
import React from 'react'

export type VariableViewItemProps = {
  name: string
  iconComponent: typeof SvgIcon
  component: React.ReactNode
}

export const VariableViewItem = ({
  name,
  component,
}: VariableViewItemProps) => {
  return (
    <Container key={name} disableGutters>
      {component}
    </Container>
  )
}
