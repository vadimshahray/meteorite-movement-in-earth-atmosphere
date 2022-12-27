/** Модель физического объекта */
type MeteoriteModel = {
  /** Расстояние от поверхности планеты до центра масс метеорита */
  distance: number
  /** Масса */
  mass: number
  /** Радиус */
  radius: number
  /** Вектор скорости */
  velocityVector: Vector3
  /** Начальная скорость */
  initialVelocity: number
}

type ModelingMeteorite = {
  velocity: number
  distance: number
}
