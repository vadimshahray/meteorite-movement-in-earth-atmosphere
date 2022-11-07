import { ConfigureToolbarContext } from 'providers'
import { useContext } from 'react'

export const useConfigureToolbar = () => {
  return useContext(ConfigureToolbarContext)
}
