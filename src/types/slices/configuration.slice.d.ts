/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  /** Активная секция конфигурации */
  activeSection: number

  planetTemplates: Record<PlanetsTemplates, PlanetData>
  activePlanetTemplate: PlanetsTemplates
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
   * Устанавливает активный шаблон планет
   * @param {ConfigurationSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<PlanetsTemplates>} action Активный шаблон
   */
  setPlanetTemplate(
    state: ConfigurationSliceState,
    action: PayloadAction<PlanetsTemplates>,
  )
}
