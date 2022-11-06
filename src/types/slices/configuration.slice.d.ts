/** Состояние слайса конфигурации приложения */
type ConfigurationSliceState = {
  /** Вводимые данные планеты */
  planet: PlanetData
  /** Модели планет */
  planetModels: PlanetModel[]
}

/**
 * Слайс, отвечающий за область конфигурации приложения
 * @interface
 */
interface ConfigurationSlice
  extends SliceCaseReducers<ConfigurationSliceState> {
  /**
   * Устанавливает данные модели планет в качестве вводимых данных планеты
   * @param {ConfigurationSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<keyof PlanetModels>} action Модель планеты
   */
  setPlanetModelData(
    state: ConfigurationSliceState,
    action: PayloadAction<keyof PlanetModels>,
  ): void

  /**
   * Устанавливает дефолтные данные планеты в качестве вводимых данных планеты
   * @param {ConfigurationSliceState} state Внутреннее состояние слайса
   */
  setDefaultPlanetData(state: ConfigurationSliceState): void

  /**
   * Устанавливает данные модели планеты, которые ввел пользователь
   * @param {ConfigurationSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<Partial_PlanetData>} action Данные модели планеты, введенные пользователем
   */
  setPlanetData(
    state: ConfigurationSliceState,
    action: PayloadAction<Partial_PlanetData>,
  ): void
}
