import { useContext } from 'react'
import { DialogContext } from '@providers'

export const useDialog = () => {
  return useContext(DialogContext)
}
