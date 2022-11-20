/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  /** Данные секции, введенные пользователем, валидны */
  isUserSectionInputValid: boolean

  activeSection: Sections
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

  setActiveSection(
    state: ConfigurationSliceState,
    action: PayloadAction<Sections>,
  ): void
}
