/** Модификатор цветовой темы */
type ColorMode = 'light' | 'dark'

/**
 * Состояние слайса темы приложения
 */
type ThemeSliceState = {
  colorMode: ColorMode
}

/**
 * Слайс, отвечающий за работу с темой приложения
 * @interface
 */
interface ThemeSlice extends SliceCaseReducers<ThemeSliceState> {
  /**
   * Устанавливает модификатор цветовой темы
   * @param {ThemeSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<ColorMode>} action Новое значение
   */
  setColorMode(state: ThemeSliceState, action: PayloadAction<ColorMode>): void
}
