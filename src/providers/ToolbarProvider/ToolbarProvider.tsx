import React, { useState, PropsWithChildren, useCallback } from 'react'
import { Toolbar, ToolbarActionButton } from './Toolbar'

export const ToolbarContext = React.createContext<{
  setActionButtons: (btns?: ToolbarActionButton[]) => void
}>({
  setActionButtons: (_) => {},
})

export const ToolbarProvider = ({ children }: PropsWithChildren) => {
  const [btns, setBtns] = useState<ToolbarActionButton[]>()

  const setActionButtons = useCallback(
    (actionButtons?: ToolbarActionButton[]) => {
      setBtns(actionButtons)
    },
    [],
  )

  return (
    <ToolbarContext.Provider value={{ setActionButtons }}>
      <>
        <Toolbar actionButtons={btns} />

        {children}
      </>
    </ToolbarContext.Provider>
  )
}
