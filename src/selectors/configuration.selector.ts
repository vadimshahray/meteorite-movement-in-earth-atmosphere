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

/**
 * Селектор активного ввода данных g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {'short' | 'detailed'} Активный вариант ввода данных
 */
export const selectPlanetgActive = (state: RootState) =>
  state.configuration.planet.g.active

/**
 * Селектор введенных данных g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {'short' | 'detailed'} Введенные данные g
 */
export const selectPlanetg = (state: RootState) => state.configuration.planet.g
