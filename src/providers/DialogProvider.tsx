import { Dialog, DialogProps } from '@mui/material'
import React, { PropsWithChildren, ReactElement, useState } from 'react'

type DialogType = ReactElement<DialogProps, typeof Dialog>

export const DialogContext = React.createContext<{
  show: (dialog: DialogType) => void
  close: () => void
}>({
  show: (_: DialogType) => {},
  close: () => {},
})

export const DialogProvider = ({ children }: PropsWithChildren) => {
  const [dialog, setDialog] = useState<DialogType>()

  const show = (dialog: DialogType) => {
    setDialog(dialog)
  }
  const close = () => {
    setDialog(undefined)
  }

  return (
    <DialogContext.Provider value={{ show, close }}>
      <>
        {children}

        {dialog}
      </>
    </DialogContext.Provider>
  )
}
