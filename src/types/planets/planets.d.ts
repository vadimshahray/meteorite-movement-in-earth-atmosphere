/** Модель данных планеты */
type PlanetData = {
  /** Радиус планеты */
  R: PowerNumber
  /** Масса планеты */
  M: PowerNumber
  /** Ускорение свободного падения */
  g: ExtendedData<PowerNumber, gDetailed>
}

/** Модель данных свободного ускорения `g` */
type gDetailed = {
  /** Гравитационная постоянная */
  G: PowerNumber
}

/** Модели планет */
type PlanetModels = {
  '@Earth': PlanetData
  '@Mars': PlanetData
}

/** Модель планеты */
type PlanetModel = {
  key: keyof PlanetModels
  /** Название планеты */
  name: string
}
