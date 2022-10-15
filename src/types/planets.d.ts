/** Модель данных планеты */
type PlanetData = {
  /** Ускорение свободного падения */
  g: ExtendedData<number, gDetailed>
}

/** Модели планет */
type PlanetModels = {
  '@Earth': PlanetData
  '@Mars': PlanetData
}

/** Модель данных свободного ускорения `g` */
type gDetailed = {
  /** Гравитационная постоянная */
  G: ConstData<number>
  /** Масса планеты */
  M: number
  /** Радиус планеты */
  R: number
}
