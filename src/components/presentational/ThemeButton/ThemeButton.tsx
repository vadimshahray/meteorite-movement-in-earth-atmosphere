import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton } from '@mui/material'

/**
 * Кнопка-переключатель темы приложения (light/dark)
 * @returns {JSX.Element}
 */
export const ThemeButton = ({ colorMode, onChange }: ThemeButtonProps) => {
  const handleClick = () => {
    onChange(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <IconButton onClick={handleClick}>
      {colorMode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  )
}
