/** Карта общих свойств всех моделей */
const commonMap: Pick<PhysicalModelPropertiesMap, 'y0' | 'K' | 'S' | 'm'> = {
  y0: true,
  K: true,
  m: true,
  S: true,
}

/** Модели карт свойств моделей различных объектов */
export const physicalModelsPropertiesMaps: PhysicalModelsPropertiesMaps = {
  '@Ball': {
    ...commonMap,
    R: true,
  },
}
