import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'

/** Пропсы селектора */
export type SectionsSelectorProps = {
  /** Массив секций */
  sections: string[]
  /** Индекс активной секции */
  activeIndex: number
  /** Обработчик активации секции */
  onActiveChange: (index: number) => void
}

/** Селектор */
export const SectionsSelector = ({
  sections,
  activeIndex,
  onActiveChange,
}: SectionsSelectorProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isOpen = Boolean(anchorEl)

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleItemClick = (index: number) => {
    onActiveChange(index)
    handleMenuClose()
  }

  return (
    <>
      <Button endIcon={<ExpandMoreIcon />} onClick={handleButtonClick}>
        <Typography>{sections[activeIndex]}</Typography>
      </Button>

      <Menu
        id='configuration/sectionsSelector'
        open={isOpen}
        onClose={handleMenuClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'top',
        }}
        transformOrigin={{
          horizontal: 'center',
          vertical: 'center',
        }}
      >
        {sections.map((s, i) => (
          <MenuItem
            selected={i === activeIndex}
            onClick={() => handleItemClick(i)}
          >
            {s}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
