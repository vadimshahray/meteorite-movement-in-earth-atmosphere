/**
 * Селектор активной секции конфигурации
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {number} Индекс активной секции
 */
export const selectActiveSection = (state: RootState) =>
  state.configuration.activeSection

/**
 * Селектор данных активного шаблона планет
 * @param {RootState} state Внутреннее состояние слайса
 * @returns {PlanetData} Данные планеты
 */
export const selectActivePlanetTemplateData = (state: RootState) =>
  state.configuration.planetTemplates[state.configuration.activePlanetTemplate]
