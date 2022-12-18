import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
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
      {colorMode === 'light' ? (
        <LightModeOutlinedIcon />
      ) : (
        <DarkModeOutlinedIcon />
      )}
    </IconButton>
  )
}
