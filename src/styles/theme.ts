import { createTheme } from '@mui/material'

/** Объект темы приложения */
export const theme = createTheme({
  breakpoints: {
    values: {
      sm: 7000,
      md: 7000,
      lg: 7000,
      xs: 7000,
      xl: 7000,
    },
  },
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
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: 'none',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: 6,
        },
      },
    },
  },
})
