import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { theme as appTheme } from 'styles'
import { PropsWithChildren } from 'react'
import { selectThemeColorMode } from 'selectors'

/**
 * Провайдер темы приложения
 * @param {ThemeProviderProps}
 * @returns {JSX.Element}
 */
export const ThemeProvider = ({ children }: PropsWithChildren) => {
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
