/** Тип секции конфигурации: объект исследования, планета, атмосфера */
type ConfigurationSectionType = 'subject' | 'planet' | 'atmosphere'

/** Секция конфигурации */
type ConfigurationSection = {
  /** Тип секции */
  type: ConfigurationSectionType
  /** Название секции */
  name: string
}

/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  /** Активная секция конфигурации */
  activeSection: ConfigurationSection
}

/**
 * Слайс, отвечающий за область конфигурации приложения
 * @interface
 */
interface ConfigurationSlice
  extends SliceCaseReducers<ConfigurationSliceState> {
  /**
   * Устанавливает активную секцию конфигурации
   * @param {ConfigurationSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<ConfigurationSection>} action Новая секция
   */
  setActiveSection(
    state: ConfigurationSliceState,
    action: PayloadAction<ConfigurationSection>,
  ): void
}
