import { Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Container, ThemeButtonContainer } from 'components'
import React from 'react'

/**
 * Тулбар секции ввода данных ConfigureLayout
 */
export const ConfigureToolbar = () => {
  return (
    <Container>
      <Toolbar variant='dense'>
        <Typography variant='h6'>{'Настройки'}</Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <ThemeButtonContainer />
      </Toolbar>
    </Container>
  )
}
