import { DialogContext } from 'providers'
import { useContext } from 'react'

export const useDialog = () => {
  return useContext(DialogContext)
}
