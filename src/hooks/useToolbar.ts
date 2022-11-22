import { ToolbarContext } from 'providers'
import { useContext } from 'react'

export const useToolbar = () => {
  return useContext(ToolbarContext)
}
