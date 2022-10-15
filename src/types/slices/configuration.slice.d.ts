/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  /** Активная секция конфигурации */
  activeSection: number

  /** Вводимые данные планеты */
  planet: PlanetData
  /** Модели планет */
  planetModels: Record<keyof PlanetModels, string>
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
   * Устанавливает данные модели планет в качестве вводимых данных планеты
   * @param {ConfigurationSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<keyof PlanetModels>} action Модель планеты
   */
  setPlanetModelData(
    state: ConfigurationSliceState,
    action: PayloadAction<keyof PlanetModels>,
  ): void
}
