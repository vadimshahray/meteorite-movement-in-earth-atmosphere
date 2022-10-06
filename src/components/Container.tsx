import {
  Container as MUIContainer,
  ContainerProps as MUIContainerProps,
} from '@mui/material'
import React from 'react'

export type ContainerProps = MUIContainerProps

/**
 * Базовый контейнер
 * @param {ContainerProps}
 * @returns {JSX.Element}
 */
export const Container = ({ ...props }: ContainerProps) => {
  return <MUIContainer {...props} />
}
