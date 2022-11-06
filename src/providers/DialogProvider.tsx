import { Dialog, DialogProps } from '@mui/material'
import React, { PropsWithChildren, ReactElement, useState } from 'react'

type DialogType = ReactElement<DialogProps, typeof Dialog>

export const DialogContext = React.createContext<{
  show: (dialog: DialogType) => void
}>({
  show: (_: DialogType) => {},
})

export const DialogProvider = ({ children }: PropsWithChildren) => {
  const [dialog, setDialog] = useState<DialogType>()

  const showDialog = (dialog: DialogType) => {
    setDialog(dialog)
  }

  return (
    <DialogContext.Provider value={{ show: showDialog }}>
      <>
        {children}

        {dialog}
      </>
    </DialogContext.Provider>
  )
}
