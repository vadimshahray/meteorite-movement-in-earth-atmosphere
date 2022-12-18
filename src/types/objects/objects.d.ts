/** Модель физического объекта */
type MeteoriteModel = {
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

/** Физические объекты, используемые в приложении */
type PhysicalModels = '@Meteorite' | '@Ball' | '@Box'

/** Физический объект. Используется для определения методов вычисления данных физ. объекта */
type PhysicalObject = {} & MeteoriteModel

/** Карта используемых свойств физической модели */
type PhysicalModelPropertiesMap = Record<keyof MeteoriteModel, boolean>

/** Карты используемых свойств физических моделей */
type PhysicalModelsPropertiesMaps = Record<
  PhysicalModels,
  PhysicalModelPropertiesMap
>
