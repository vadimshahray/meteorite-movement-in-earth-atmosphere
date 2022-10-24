/**
 * Селектор активной секции конфигурации
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {number} Индекс активной секции
 */
export const selectActiveSection = (state: RootState) =>
  state.configuration.activeSection

/**
 * Селектор моделей планет
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {Record<keyof PlanetModels, string>} Модели планет
 */
export const selectPlanetModels = (state: RootState) =>
  state.configuration.planetModels
