import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from 'styles/theme'

/** Экземпляр контекста темы приложения */
export const ThemeContext = React.createContext<ThemeContextType>({})

/**
 * Провайдер темы приложения
 * @param {ThemeProviderProps}
 * @returns {JSX.Element}
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </MUIThemeProvider>
  )
}
