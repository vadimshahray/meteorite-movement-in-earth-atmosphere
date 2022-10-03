import { CssBaseline } from '@mui/material'
import React from 'react'

export const ThemeContext = React.createContext<ThemeContextType>({})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      <CssBaseline />

      {children}
    </>
  )
}
