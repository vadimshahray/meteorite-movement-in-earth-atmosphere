import { G } from './constants'

/** Дефолтная конфигурация планеты "Марс" */
export const MarsPlanet: PlanetData = {
  M: {
    value: 6.4171,
    power: 23,
  },
  R: {
    value: 3389.5,
    power: 3,
  },
  g: {
    active: 'short',
    short: {
      value: 11,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
