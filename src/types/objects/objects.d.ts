/** Модель физического объекта */
type MeteoriteModel = {
  /** Расстояние от поверхности планеты до центра масс объекта */
  distance: number
  /** Масса */
  mass: number
  /** Коэффициент лобового сопротивления */
  K: number
  /** Площадь поперечного сечения */
  S: number

  /** Радиус (не общее) */
  radius: number
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
