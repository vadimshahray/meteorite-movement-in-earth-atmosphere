/** Базовый шаблон */
type DataTemplate<T> = {
  /** Название шаблона */
  name: string
  /** Значения по умолчанию */
  default: T
  /** Активные значения */
  current: T
}

/** Шаблон данных планеты */
type PlanetData = {
  /** Радиус планеты */
  radius: number
}

/** Используемые шаблоны планеты */
type PlanetTemplates = {
  '@custom': DataTemplate<PlanetData>
  '@Earth': DataTemplate<PlanetData>
}
