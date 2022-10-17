import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useCallback } from 'react'
import { VariableViewItem, VariableViewItemProps } from './VariableViewItem'

export type VariableViewProps = {
  activeName: string
  children: React.ReactElement<VariableViewItemProps, typeof VariableViewItem>[]
}

export const VariableView = ({ activeName, children }: VariableViewProps) => {
  const activeItem = children.find((c) => c.props.name === activeName)

  const toggleButtons = useCallback(() => {
    return (
      <ToggleButtonGroup exclusive value={activeName}>
        {children.map((c) => (
          <ToggleButton key={c.props.name} value={c.props.name}>
            {c.props.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    )
  }, [activeName, children])

  return (
    <>
      {toggleButtons()}
      {activeItem}
    </>
  )
}
