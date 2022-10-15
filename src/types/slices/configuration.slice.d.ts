/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  /** Активная секция конфигурации */
  activeSection: number

  /** Шаблоны планеты */
  planetTemplates: PlanetModels
  /** Название активного шаблона планеты */
  activePlanetTemplate: keyof PlanetModels
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
   * @param {PayloadAction<string>} action Новая секция
   */
  setActiveSection(
    state: ConfigurationSliceState,
    action: PayloadAction<number>,
  ): void

  /**
   * Устанавливает активный шаблон планеты
   * @param {ConfigurationSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<keyof PlanetData>} action имя активного шаблона
   */
  setActivePlanetTemplate(
    state: ConfigurationSliceState,
    action: PayloadAction<keyof PlanetModels>,
  )
}
