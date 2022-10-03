import { ThemeContext } from 'providers'
import { useContext } from 'react'

/**
 * Хук предоставляющий контекст темы приложения
 * @returns {ThemeContextType} Контекст темы приложения
 */
export const useTheme = () => {
  return useContext(ThemeContext)
}
