/** Модель данных планеты */
type Partial_PlanetData = {
  /** Радиус планеты */
  R?: Partial_PowerNumber
  /** Масса планеты */
  M?: Partial_PowerNumber
  /** Ускорение свободного падения */
  g?: Partial_ExtendedData<Partial_PowerNumber, Partial_gDetailed>
}

/** Частичная модель данных свободного ускорения `g` */
type Partial_gDetailed = {
  /** Гравитационная постоянная */
  G: ConstData<number>
}
