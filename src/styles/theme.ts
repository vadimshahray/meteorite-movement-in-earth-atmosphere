import { createTheme } from '@mui/material'
import baseStyles from './baseline.module.css'

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: baseStyles,
    },
  },
})
