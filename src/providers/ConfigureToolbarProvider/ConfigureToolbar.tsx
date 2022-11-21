import { Toolbar, Typography } from '@mui/material'
import { ButtonProps, Button } from '@mui/material'
import { Container, ThemeButton } from 'components'
import React from 'react'

export type ConfigureToolbarActionButton = React.ReactElement<
  ButtonProps & { key: string },
  typeof Button
>

export type ConfigureToolbarProps = {
  actionButtons?: ConfigureToolbarActionButton[]
}

/** Тулбар секции ввода данных ConfigureLayout */
export const ConfigureToolbar = ({ actionButtons }: ConfigureToolbarProps) => {
  return (
    <Container disableGutters>
      <Toolbar variant='dense' sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h6'>Настройки приложения</Typography>

        <div>
          {actionButtons?.map((btn, i) => (
            <span key={i}>{btn}</span>
          ))}
        </div>

        <ThemeButton />
      </Toolbar>
    </Container>
  )
}
