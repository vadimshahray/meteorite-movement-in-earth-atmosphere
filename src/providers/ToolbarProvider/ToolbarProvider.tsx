import React, { useState, PropsWithChildren, useCallback } from 'react'
import { Toolbar, ToolbarActionButton } from './Toolbar'

export const ToolbarContext = React.createContext({
  setTitle: (title: string) => {},
  setActionButtons: (btns?: ToolbarActionButton[]) => {},
})

export const ToolbarProvider = ({ children }: PropsWithChildren) => {
  const [title, setTitle] = useState('')
  const [btns, setBtns] = useState<ToolbarActionButton[]>()

  const setActionButtons = useCallback(
    (actionButtons?: ToolbarActionButton[]) => {
      setBtns(actionButtons)
    },
    [],
  )

  return (
    <ToolbarContext.Provider value={{ setTitle, setActionButtons }}>
      <>
        <Toolbar title={title} actionButtons={btns} />

        {children}
      </>
    </ToolbarContext.Provider>
  )
}
