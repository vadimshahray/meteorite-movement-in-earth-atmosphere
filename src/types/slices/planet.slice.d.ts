/** Состояние слайса конфигурации приложения */
type PlanetSliceState = {
  /** Вводимые данные планеты */
  planet: PlanetData
  /** Модели планет */
  planetModels: PlanetModel[]
}

/**
 * Слайс, отвечающий за область конфигурации приложения
 * @interface
 */
interface PlanetSlice extends SliceCaseReducers<PlanetSliceState> {
  /**
   * Устанавливает данные модели планет в качестве вводимых данных планеты
   * @param {PlanetSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<keyof PlanetModels>} action Модель планеты
   */
  setPlanetModelData(
    state: PlanetSliceState,
    action: PayloadAction<keyof PlanetModels>,
  ): void

  /**
   * Устанавливает данные модели планеты, которые ввел пользователь
   * @param {PlanetSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<Partial_PlanetData>} action Данные модели планеты, введенные пользователем
   */
  setPlanetData(
    state: PlanetSliceState,
    action: PayloadAction<Partial_PlanetData>,
  ): void
}
