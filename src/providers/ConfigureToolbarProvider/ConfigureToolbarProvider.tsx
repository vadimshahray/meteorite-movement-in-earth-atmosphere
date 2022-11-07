import React, { useState, PropsWithChildren, useCallback } from 'react'
import {
  ConfigureToolbar,
  ConfigureToolbarActionButton,
} from './ConfigureToolbar'

export const ConfigureToolbarContext = React.createContext<{
  setActionButton: (btn: ConfigureToolbarActionButton) => void
}>({
  setActionButton: (_) => {},
})

export const ConfigureToolbarProvider = ({ children }: PropsWithChildren) => {
  const [btn, setBtn] = useState<ConfigureToolbarActionButton>()

  const setActionButton = useCallback(
    (actionButton: ConfigureToolbarActionButton) => {
      setBtn(actionButton)
    },
    [],
  )

  return (
    <ConfigureToolbarContext.Provider value={{ setActionButton }}>
      <>
        <ConfigureToolbar actionButton={btn} />
        {children}
      </>
    </ConfigureToolbarContext.Provider>
  )
}
