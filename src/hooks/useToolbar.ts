import { useContext } from 'react'
import { ToolbarContext } from '@providers'

export const useToolbar = () => {
  return useContext(ToolbarContext)
}
