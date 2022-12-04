import { ball, box } from 'models'

/** Карта общих свойств всех моделей */
const commonMap: Pick<PhysicalModelPropertiesMap, 'y0' | 'K' | 'S' | 'm'> = {
  y0: true,
  K: true,
  m: true,
  S: true,
}

/** Модели карт свойств моделей различных объектов */
export const physicalModelsPropertiesMaps: PhysicalModelsPropertiesMaps = {
  '@Meteorite': {
    ...commonMap,
    R: true,
  },
  '@Ball': {
    ...commonMap,
    R: true,
  },
  '@Box': {
    ...commonMap,
    R: false,
  },
}

/** Массив физических именованных физических моделей, используемых в приложении */
export const physicalModels: {
  name: string
  key: PhysicalModels
  data: PhysicalModel
}[] = [
  { name: 'Шар', key: '@Ball', data: ball },
  { name: 'Коробка', key: '@Box', data: box },
]
