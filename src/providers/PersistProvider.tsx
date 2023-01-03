import { persistor } from 'src/store'
import { PropsWithChildren } from 'react'
import { PersistGate } from 'redux-persist/integration/react'

/** Персистор приложения */
export const PersistProvider = ({ children }: PropsWithChildren) => {
  return <PersistGate persistor={persistor}>{children}</PersistGate>
}
