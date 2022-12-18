import { ToggleButton, ToggleButtonGroup } from '@mui/material'

export type TogglerItem = {
  key: string
  name: string
}

export type TogglerProps = {
  value: string
  items: TogglerItem[]
  onChange: (item: string) => void
}

export const Toggler = ({ value, items, onChange }: TogglerProps) => {
  const handleChange = (_: React.MouseEvent<HTMLElement>, item: string) => {
    onChange(item)
  }

  return (
    <ToggleButtonGroup
      exclusive
      size='small'
      value={value}
      onChange={handleChange}
    >
      {items.map(({ key, name }) => (
        <ToggleButton value={key} key={key}>
          {name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
