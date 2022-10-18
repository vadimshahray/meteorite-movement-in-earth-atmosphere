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
 * Селектор активной вариации ввода данных
 * @param {keyof PlanetData} data Данные планеты, вариацию которых нужно получить
 * @returns Активную вариацию ввода данных
 */
export const selectPlanetActiveDataVariation =
  (data: keyof PlanetData) => (state: RootState) =>
    state.configuration.planet[data].active
