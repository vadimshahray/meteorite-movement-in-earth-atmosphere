import { store } from 'store'
import { Provider } from 'react-redux'

/**
 * Провайдер Redux-хранилища приложения
 * @returns {JSX.Element}
 */
export const StoreProvider = (props: ProviderBaseProps) => {
  return <Provider store={store} {...props}></Provider>
}
