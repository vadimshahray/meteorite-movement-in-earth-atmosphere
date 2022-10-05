import { Provider } from 'react-redux'
import { store } from 'store'

/**
 * Провайдер Redux-хранилища приложения
 * @returns {JSX.Element}
 */
export const StoreProvider = (props: ProviderBaseProps) => {
  return <Provider store={store} {...props}></Provider>
}
