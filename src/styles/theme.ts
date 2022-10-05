import { createTheme } from '@mui/material'

/** Объект темы приложения */
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => `
        body {
          height: 100vh;
        }
        #root {
          width: 100%;
          height: 100%;
        }
      `,
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        }),
        disableGutters: ({ theme }) => ({
          paddingTop: 0,
          paddingBottom: 0,
        }),
      },
    },
  },
})
