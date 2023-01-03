import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, Menu, MenuItem, Typography } from '@mui/material'

/** Элемент селектора */
export type SelectorItem<T> = {
  /** Ключ: используется для идентификации элемента */
  key: T
  /** Имя: используется для отображения элемента  */
  name: string
}

/** Пропсы селектора */
export type SelectorProps<T> = {
  /** Массив элементов */
  items: SelectorItem<T>[]
  /** Ключ активного элемента */
  activeItemKey: T
  /** Обработчик активации элемента */
  onActiveChange: (activeItemKey: T) => void
}

/** Селектор */
export const Selector = <T,>({
  items,
  activeItemKey,
  onActiveChange,
}: SelectorProps<T>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isOpen = Boolean(anchorEl)

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleItemClick = (activeItem: SelectorItem<T>) => {
    onActiveChange(activeItem.key)
    handleMenuClose()
  }

  return (
    <>
      <Button endIcon={<ExpandMoreIcon />} onClick={handleButtonClick}>
        <Typography>
          {items.find((item) => item.key === activeItemKey)?.name}
        </Typography>
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
        {items.map((item, index) => (
          <MenuItem
            key={index}
            selected={item.key === activeItemKey}
            onClick={() => handleItemClick(item)}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
