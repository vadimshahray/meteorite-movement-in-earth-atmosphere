/** Пропсы компонента ThemeButton */
type ThemeButtonProps = {
  /** Начальное значение модификатора цвета темы */
  colorMode: ColorMode
  /**
   * Обработчик изменения модификатора цвета темы
   * @param {ColorMode} newColorMode Новое значение модификатора цвета темы
   */
  onChange(newColorMode: ColorMode): void
}
