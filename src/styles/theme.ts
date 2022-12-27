import { createTheme } from '@mui/material'
import { fontFamily } from '@mui/system'

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
  typography: {
    fontFamily: 'Jost',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => `
        body {
          height: 100vh;
        }
        #root {
          width: 100%;
          height: 100%;
        }

        ::-webkit-scrollbar {
          width: 0.5rem;
          height: 0.5rem;
        }
        ::-webkit-scrollbar-thumb {
          -webkit-transition: .3s ease all;
          transition: .3s ease all;
          border-color: transparent;
          background-color: ${theme.palette.divider};
          z-index: 40;
        }

        tspan {
          font-family: Jost;
          font-size: ${theme.typography.caption.fontSize};
          fill: ${theme.palette.text.secondary};
        }

        .recharts-reference-line tspan {
          fill: ${theme.palette.background.default};
        }
      `,
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        }),
        disableGutters: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiDivider: {
      defaultProps: {
        light: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          marginTop: 8,
        },
      },
    },
  },
})
