import { Typography, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Container } from 'components/Container'
import React from 'react'
import styles from './variableView.module.css'
import { VariableViewItem, VariableViewItemProps } from './VariableViewItem'

export type VariableViewProps = {
  label: string
  activeName: string
  children: React.ReactElement<VariableViewItemProps, typeof VariableViewItem>[]
  onActiveChange: (value: string) => void
}

export const VariableView = ({
  label,
  activeName,
  children,
  onActiveChange,
}: VariableViewProps) => {
  const activeItem = children.find((c) => c.props.name === activeName)

  const handleActiveChange = (_: any, value: string) => {
    if (value !== null) {
      onActiveChange(value)
    }
  }

  return (
    <Container disableGutters>
      <div className={styles.header_layout}>
        <Typography>{label}</Typography>

        <ToggleButtonGroup
          exclusive
          value={activeItem?.props.name}
          onChange={handleActiveChange}
        >
          {children.map(({ props: { name, iconComponent: Icon } }, i) => (
            <ToggleButton key={i + name} value={name}>
              <Icon />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      {activeItem}
    </Container>
  )
}
