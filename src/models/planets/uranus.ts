import { G } from './constants'

/** Дефолтная конфигурация планеты "Уран" */
export const UranusPlanet: PlanetData = {
  M: {
    value: 8.6813,
    power: 25,
  },
  R: {
    value: 25362,
    power: 3,
  },
  g: {
    active: 'short',
    short: {
      value: 8.87,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
