/**
 * Селектор моделей планет
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {PlanetModel[]} Модели планет
 */
export const selectPlanetModels = (state: RootState) =>
  state.planet.planetModels

/**
 * Селектор введенного радиуса планеты
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {PowerNumber} Радиус планеты
 */
export const selectPlanetR = (state: RootState) => state.planet.planet.R

/**
 * Селектор введенной массы планеты
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {PowerNumber} Масс планеты
 */
export const selectPlanetM = (state: RootState) => state.planet.planet.M

/**
 * Селектор активного ввода данных g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {'short' | 'detailed'} Активный вариант ввода данных
 */
export const selectPlanetgActive = (state: RootState) =>
  state.planet.planet.g.active

/**
 * Селектор значения g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {PowerNumber} Значение g
 */
export const selectPlanetg = (state: RootState) => state.planet.planet.g.short

/**
 * Селектор G g
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {'short' | 'detailed'} G
 */
export const selectPlanetgG = (state: RootState) =>
  state.planet.planet.g.detailed.G
