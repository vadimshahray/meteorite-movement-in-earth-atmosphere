import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from 'store'

/** Персистор приложения */
export const PersistProvider = (props: ProviderBaseProps) => {
  return <PersistGate persistor={persistor} {...props}></PersistGate>
}
