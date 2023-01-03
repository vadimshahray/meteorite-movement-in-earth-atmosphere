import { persistor } from 'store'
import { PersistGate } from 'redux-persist/integration/react'

/** Персистор приложения */
export const PersistProvider = (props: ProviderBaseProps) => {
  return <PersistGate persistor={persistor} {...props}></PersistGate>
}
