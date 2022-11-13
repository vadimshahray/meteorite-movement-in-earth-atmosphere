import { Toolbar, Typography } from '@mui/material'
import { ButtonProps, Button } from '@mui/material'
import { Container, ThemeButton } from 'components'
import React from 'react'

export type ConfigureToolbarActionButton = React.ReactElement<
  ButtonProps,
  typeof Button
>

export type ConfigureToolbarProps = {
  actionButton?: ConfigureToolbarActionButton
}

/** Тулбар секции ввода данных ConfigureLayout */
export const ConfigureToolbar = ({ actionButton }: ConfigureToolbarProps) => {
  return (
    <Container disableGutters>
      <Toolbar variant='dense'>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Настройки приложения
        </Typography>

        {actionButton}
        <ThemeButton />
      </Toolbar>
    </Container>
  )
}
