/** Модель данных планеты */
type Partial_PlanetData = {
  /** Ускорение свободного падения */
  g: ExtendedData<number?, Partial_gDetailed>
}

/** Частичная модель данных свободного ускорения `g` */
type Partial_gDetailed = {
  /** Гравитационная постоянная */
  G: ConstData<number>
  /** Масса планеты */
  M?: number
  /** Радиус планеты */
  R?: number
}
