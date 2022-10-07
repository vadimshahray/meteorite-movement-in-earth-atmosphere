import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { Container, ThemeButtonContainer } from 'components'
import { ConfigureSectionsSelectorContainer } from 'components/containers/ConfigureSectionsSelectorContainer'
import React from 'react'

/** Тулбар секции ввода данных ConfigureLayout */
export const ConfigureToolbar = () => {
  return (
    <Container>
      <Toolbar variant='dense'>
        <ConfigureSectionsSelectorContainer />

        <Box sx={{ flexGrow: 1 }}></Box>
        <ThemeButtonContainer />
      </Toolbar>
    </Container>
  )
}
