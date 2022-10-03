import { Container, ContainerProps } from 'components'
import React from 'react'

/**
 * Базовый контейнер на всю ширину
 * @param {ContainerProps}
 * @returns {JSX.Element}
 */
export const FullContainer = ({ ...props }: ContainerProps) => {
  return <Container {...props} maxWidth='xl' disableGutters />
}
