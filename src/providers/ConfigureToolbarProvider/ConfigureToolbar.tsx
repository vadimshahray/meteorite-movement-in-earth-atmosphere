import { Toolbar, Typography } from '@mui/material'
import { ButtonProps, Button } from '@mui/material'
import { Box } from '@mui/system'
import { Container, ThemeButtonContainer } from 'components'
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
        <Typography variant='h6'>Настройки приложения</Typography>

        <Box sx={{ flexGrow: 1 }}></Box>

        {actionButton}
        <ThemeButtonContainer />
      </Toolbar>
    </Container>
  )
}
