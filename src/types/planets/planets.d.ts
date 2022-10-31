/** Модель данных планеты */
type PlanetData = {
  /** Радиус планеты */
  R: number
  /** Масса планеты */
  M: number
  /** Ускорение свободного падения */
  g: ExtendedData<number, gDetailed>
}

/** Модель данных свободного ускорения `g` */
type gDetailed = {
  /** Гравитационная постоянная */
  G: ConstData<number>
}

/** Модели планет */
type PlanetModels = {
  '@Earth': PlanetData
  '@Mars': PlanetData
}
