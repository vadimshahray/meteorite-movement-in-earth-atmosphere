import { PropsWithChildren } from 'react'
import { SnackbarProvider as NOTISnackBarProvider } from 'notistack'

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  return <NOTISnackBarProvider maxSnack={4}>{children}</NOTISnackBarProvider>
}
