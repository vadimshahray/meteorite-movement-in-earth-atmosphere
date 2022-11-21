/** Модель данных планеты */
type PlanetData = {
  /** Радиус планеты */
  R: PowerNumber
  /** Масса планеты */
  M: PowerNumber
  /** Ускорение свободного падения */
  g: ExtendedData<number, gDetailed>
}

/** Модель данных свободного ускорения `g` */
type gDetailed = {
  /** Гравитационная постоянная */
  G: PowerNumber
}

/** Модели планет */
type PlanetModels = {
  '@Mercury': PlanetData
  '@Venus': PlanetData
  '@Earth': PlanetData
  '@Mars': PlanetData
  '@Jupiter': PlanetData
  '@Saturn': PlanetData
  '@Uranus': PlanetData
  '@Neptune': PlanetData
}

/** Модель планеты */
type PlanetModel = {
  key: keyof PlanetModels
  /** Название планеты */
  name: string
}
