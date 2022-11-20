import React, { useState, PropsWithChildren, useCallback } from 'react'
import {
  ConfigureToolbar,
  ConfigureToolbarActionButton,
} from './ConfigureToolbar'

export const ConfigureToolbarContext = React.createContext<{
  setActionButtons: (btns?: ConfigureToolbarActionButton[]) => void
}>({
  setActionButtons: (_) => {},
})

export const ConfigureToolbarProvider = ({ children }: PropsWithChildren) => {
  const [btns, setBtns] = useState<ConfigureToolbarActionButton[]>()

  const setActionButtons = useCallback(
    (actionButtons?: ConfigureToolbarActionButton[]) => {
      setBtns(actionButtons)
    },
    [],
  )

  return (
    <ConfigureToolbarContext.Provider value={{ setActionButtons }}>
      <>
        <ConfigureToolbar actionButtons={btns} />
        {children}
      </>
    </ConfigureToolbarContext.Provider>
  )
}
