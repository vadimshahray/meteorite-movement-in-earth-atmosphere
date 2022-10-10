/**
 * Селектор активной секции конфигурации
 * @param {RooState} state Внутреннее состояние хранилища
 * @returns {number} Индекс активной секции
 */
export const selectActiveSection = (state: RootState) =>
  state.configuration.activeSection

/**
 * Селектор названий шаблонов планеты
 * @param { RootState }state Внутреннее состояние слайса
 * @returns {[string, string][]} Массив кортежей [ключ-название планеты, название планеты]
 */
export const selectPlanetTemplates = (state: RootState) =>
  Object.entries(state.configuration.planetTemplates).map(
    (entry): [keyof PlanetTemplates, string] => [
      entry[0] as keyof PlanetTemplates,
      entry[1].name,
    ],
  )

/**
 * Селектор активного шаблона планеты
 * @param {RootState} state Внутреннее состояние слайса
 * @returns {PlanetData} Активный шаблон планеты
 */
export const selectActivePlanetTemplate = (state: RootState) =>
  state.configuration.activePlanetTemplate

/**
 * Селектор данных активного шаблона планеты
 * @param {RootState} state Внутреннее состояние слайса
 * @returns {PlanetData} Данные активного шаблона планеты
 */
export const selectActivePlanetTemplateData = (state: RootState) =>
  state.configuration.planetTemplates[state.configuration.activePlanetTemplate]
    .current
