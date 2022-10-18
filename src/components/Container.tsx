import {
  Container as MUIContainer,
  ContainerProps as MUIContainerProps,
} from '@mui/material'
import React from 'react'

export type ContainerProps = MUIContainerProps & {
  disableGuttersH?: boolean
}

/**
 * Базовый контейнер
 * @param {ContainerProps}
 * @returns {JSX.Element}
 */
export const Container = ({
  disableGuttersH = false,
  ...props
}: ContainerProps) => {
  return (
    <MUIContainer
      sx={{
        paddingRight: disableGuttersH ? 0 : undefined,
        paddingLeft: disableGuttersH ? 0 : undefined,
      }}
      {...props}
    />
  )
}
