/** Модель данных планеты */
type Partial_PlanetData = {
  /** Радиус планеты */
  R?: number
  /** Масса планеты */
  M?: number
  /** Ускорение свободного падения */
  g: Partial_ExtendedData<number, Partial_gDetailed>
}

/** Частичная модель данных свободного ускорения `g` */
type Partial_gDetailed = {
  /** Гравитационная постоянная */
  G: ConstData<number>
}
