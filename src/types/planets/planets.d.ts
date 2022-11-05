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
  G: ConstData<number>
}

/** Модели планет */
type PlanetModels = {
  '@Earth': PlanetData
  '@Mars': PlanetData
}
