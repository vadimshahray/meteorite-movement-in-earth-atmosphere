/** Базовый шаблон */
type DataTemplate = {
  name: string
}

/** Шаблон данных планеты */
type PlanetData = {
  /** Радиус планеты */
  radius: number
} & DataTemplate

/** Используемые шаблоны планет */
type PlanetsTemplates = 'custom' | 'Earth'
