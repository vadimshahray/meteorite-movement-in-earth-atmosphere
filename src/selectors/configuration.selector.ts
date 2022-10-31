/**
 * Селектор моделей планет
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {Record<keyof PlanetModels, string>} Модели планет
 */
export const selectPlanetModels = (state: RootState) =>
  state.configuration.planetModels

/**
 * Селектор активного ввода данных g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {'short' | 'detailed'} Активный вариант ввода данных
 */
export const selectPlanetgActive = (state: RootState) =>
  state.configuration.planet.g.active

/**
 * Селектор значения g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {number} Значение g
 */
export const selectPlanetg = (state: RootState) =>
  state.configuration.planet.g.short

/**
 * Селектор G g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {'short' | 'detailed'} G
 */
export const selectPlanetgG = (state: RootState) =>
  state.configuration.planet.g.detailed.G
