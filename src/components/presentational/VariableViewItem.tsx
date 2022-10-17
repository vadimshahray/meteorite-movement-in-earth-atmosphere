import { Container } from 'components'
import React from 'react'

export type VariableViewItemProps = {
  name: string
  component: React.ReactNode
}

export const VariableViewItem = ({
  name,
  component,
}: VariableViewItemProps) => {
  return <Container key={name}>{component}</Container>
}
