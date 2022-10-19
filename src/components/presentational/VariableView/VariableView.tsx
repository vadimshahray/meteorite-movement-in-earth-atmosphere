import { Typography, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Container } from 'components/Container'
import React from 'react'
import styles from './variableView.module.css'
import { VariableViewItem, VariableViewItemProps } from './VariableViewItem'

export type VariableViewProps = {
  label: string
  activeName: string
  children: React.ReactElement<VariableViewItemProps, typeof VariableViewItem>[]
}

export const VariableView = ({
  label,
  activeName,
  children,
}: VariableViewProps) => {
  const activeItem = children.find((c) => c.props.name === activeName)

  const handleActiveChange = (_: any, value: string) => {}

  return (
    <Container disableGutters>
      <div className={styles.header_layout}>
        <Typography>{label}</Typography>

        <ToggleButtonGroup
          exclusive
          value={activeItem?.props.name}
          onChange={handleActiveChange}
        >
          {children.map(({ props: { name, iconComponent } }) => (
            <ToggleButton key={name} value={name}>
              {iconComponent}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <Container disableGuttersH>{activeItem}</Container>
    </Container>
  )
}
