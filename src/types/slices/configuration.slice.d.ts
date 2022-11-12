/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  /** Данные секции, введенные пользователем, валидны */
  isUserSectionInputValid: boolean
}

/**
 * Слайс, отвечающий за область конфигурации приложения
 * @interface
 */
interface ConfigurationSlice
  extends SliceCaseReducers<ConfigurationSliceState> {
  setIsUserSectionInputValid(
    state: ConfigurationSliceState,
    action: PayloadAction<boolean>,
  ): void
}
