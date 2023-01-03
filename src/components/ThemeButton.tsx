import { useDispatch } from 'hooks'
import { setColorMode } from 'slices'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'
import { IconButton, Tooltip } from '@mui/material'
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'

/**
 * Кнопка-переключатель темы приложения (light/dark)
 * @returns {JSX.Element}
 */
export const ThemeButton = () => {
  const dispatch = useDispatch()
  const colorMode = useSelector(selectThemeColorMode)

  const handleClick = () => {
    dispatch(setColorMode(colorMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <Tooltip
      title={
        colorMode === 'light'
          ? 'Переключиться на темную тему'
          : 'Переключиться на светлую тему'
      }
    >
      <IconButton onClick={handleClick}>
        {colorMode === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
      </IconButton>
    </Tooltip>
  )
}
