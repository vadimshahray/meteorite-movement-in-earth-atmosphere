import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'
import { theme as appTheme } from 'styles/theme'

/** Экземпляр контекста темы приложения */
export const ThemeContext = React.createContext<ThemeContextType>({})

/**
 * Провайдер темы приложения
 * @param {ThemeProviderProps}
 * @returns {JSX.Element}
 */
export const ThemeProvider = ({ children }: ProviderBaseProps) => {
  const colorMode = useSelector(selectThemeColorMode)

  const theme = createTheme({
    ...appTheme,
    palette: {
      mode: colorMode,
    },
  })

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
