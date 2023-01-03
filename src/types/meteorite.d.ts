/** Модель физического объекта */
type MeteoriteModel = {
  /** Расстояние от поверхности планеты до центра масс метеорита */
  distance: number
  /** Масса */
  mass: number
  /** Радиус */
  radius: number

  velocityVectorX: number
  velocityVectorY: number

  /** Начальная скорость */
  initialVelocity: number
}

type ModelingMeteorite = {
  velocity: number
  distance: number
}
