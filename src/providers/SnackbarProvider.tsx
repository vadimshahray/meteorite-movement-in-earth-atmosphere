import { SnackbarProvider as NOTISnackBarProvider } from 'notistack'
import React, { PropsWithChildren } from 'react'

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  return <NOTISnackBarProvider maxSnack={4}>{children}</NOTISnackBarProvider>
}
