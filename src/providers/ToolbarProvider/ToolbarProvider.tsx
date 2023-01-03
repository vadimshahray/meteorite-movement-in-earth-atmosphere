import { Toolbar, ToolbarActionButton } from './Toolbar'
import React, { useState, PropsWithChildren, useCallback } from 'react'

export const ToolbarContext = React.createContext({
  setTitle: (_: string) => {},
  setIcon: (_: Icon) => {},
  setActionButtons: (_?: ToolbarActionButton[]) => {},
})

export const ToolbarProvider = ({ children }: PropsWithChildren) => {
  const [title, setTitle] = useState('')
  const [icon, setIcon] = useState<Icon>()
  const [buttons, setButtons] = useState<ToolbarActionButton[]>()

  const setActionButtons = useCallback(
    (actionButtons?: ToolbarActionButton[]) => {
      setButtons(actionButtons)
    },
    [],
  )

  return (
    <ToolbarContext.Provider value={{ setTitle, setIcon, setActionButtons }}>
      <>
        <Toolbar title={title} actionButtons={buttons} Icon={icon} />

        {children}
      </>
    </ToolbarContext.Provider>
  )
}
