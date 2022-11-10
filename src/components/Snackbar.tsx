import { Alert, AlertColor } from '@mui/material'
import { SnackbarContent } from 'notistack'
import React from 'react'

export type SnackbarProps = {
  message: string
  variant: AlertColor
}

export const ErrorSnackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  ({ message, variant }, ref) => {
    return (
      <SnackbarContent ref={ref}>
        <Alert severity={variant}>{message}</Alert>
      </SnackbarContent>
    )
  },
)
