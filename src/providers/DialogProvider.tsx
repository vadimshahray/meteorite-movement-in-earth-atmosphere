import { Dialog, DialogProps } from '@mui/material'
import React, { PropsWithChildren, ReactElement, useState } from 'react'

type DialogType = ReactElement<DialogProps, typeof Dialog>

export const DialogContext = React.createContext<{
  showDialog: (dialog: DialogType) => void
}>({
  showDialog: (_: DialogType) => {},
})

export const DialogProvider = ({ children }: PropsWithChildren) => {
  const [dialog, setDialog] = useState<DialogType>()

  const showDialog = (dialog: DialogType) => {
    setDialog(dialog)
  }

  return (
    <DialogContext.Provider value={{ showDialog }}>
      <>
        {children}

        {dialog}
      </>
    </DialogContext.Provider>
  )
}
