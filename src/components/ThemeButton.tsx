import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton } from '@mui/material'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'
import { setColorMode } from 'slices'

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
    <IconButton onClick={handleClick}>
      {colorMode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  )
}
