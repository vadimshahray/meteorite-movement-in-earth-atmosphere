/** Модель физического объекта */
type PhysicalModel = {
  /** Расстояние от поверхности планеты до центра масс объекта */
  y0: number
  /** Масса */
  m: number
  /** Коэффициент лобового сопротивления */
  K: number
  /** Площадь поперечного сечения */
  S: number

  /** Радиус (не общее) */
  R: number
}

/** Физический объект. Используется для определения методов вычисления данных физ. объекта */
type PhysicalObject = {} & PhysicalModel

/** Карта используемых свойств физической модели */
type PhysicalModelPropertiesMap = Record<keyof PhysicalModel, boolean>

/** Карты используемых свойств физических моделей */
type PhysicalModelsPropertiesMaps = Record<string, PhysicalModelPropertiesMap>
