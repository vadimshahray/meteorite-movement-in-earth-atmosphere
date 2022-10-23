/** Модель данных планеты */
type PlanetData = {
  /** Ускорение свободного падения */
  g: ExtendedData<number, gDetailed>
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

/** Модели планет */
type PlanetModels = {
  '@Earth': PlanetData
  '@Mars': PlanetData
}
