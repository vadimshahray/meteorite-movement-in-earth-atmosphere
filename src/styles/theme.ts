import { createTheme } from '@mui/material'

/** Объект темы приложения */
export const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
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
          overflow: 'hidden',
        }),
        disableGutters: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.shadows[2],
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },
  },
})
