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
 * Селектор массы планеты
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {number} Масса планеты
 */
export const selectPlanetM = (state: RootState) => state.configuration.planet.M

/**
 * Селектор радиуса планеты
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {number} Радиус планеты
 */
export const selectPlanetR = (state: RootState) => state.configuration.planet.R

/**
 * Селектор активного ввода данных g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {'short' | 'detailed'} Активный вариант ввода данных
 */
export const selectPlanetgActive = (state: RootState) =>
  state.configuration.planet.g.active

/**
 * Селектор данных планеты g.G
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {ConstData<number>} G
 */
export const selectPlanetgG = (state: RootState) =>
  state.configuration.planet.g.detailed.G
