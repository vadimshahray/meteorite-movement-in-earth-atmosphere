import { Toolbar as MUIToolbar, Typography } from '@mui/material'
import { ButtonProps, Button } from '@mui/material'
import { Container, ThemeButton } from 'components'
import React from 'react'

export type ToolbarActionButton = React.ReactElement<
  ButtonProps & { key: string },
  typeof Button
>

export type ToolbarProps = {
  title: string
  Icon?: Icon
  actionButtons?: ToolbarActionButton[]
}

/** Тулбар секции ввода данных ConfigureLayout */
export const Toolbar = ({ title, Icon, actionButtons }: ToolbarProps) => {
  return (
    <Container disableGutters>
      <MUIToolbar variant='dense' sx={{ justifyContent: 'space-between' }}>
        <Container
          disableGutters
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {Icon && <Icon sx={{ marginRight: 1 }} />}
          <Typography variant='h6'>{title}</Typography>
        </Container>

        <div>
          {actionButtons?.map((btn, i) => (
            <span key={i}>{btn}</span>
          ))}
        </div>

        <ThemeButton />
      </MUIToolbar>
    </Container>
  )
}
