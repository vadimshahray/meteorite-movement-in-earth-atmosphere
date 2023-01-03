import { store } from 'src/store'
import { Provider } from 'react-redux'
import { PropsWithChildren } from 'react'

/**
 * Провайдер Redux-хранилища приложения
 * @returns {JSX.Element}
 */
export const StoreProvider = (props: Required<PropsWithChildren>) => {
  return <Provider store={store} {...props}></Provider>
}
