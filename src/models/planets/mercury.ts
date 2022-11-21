import { G } from './constants'

/** Дефолтная конфигурация планеты "Меркурий" */
export const MercuryPlanet: PlanetData = {
  M: {
    value: 3.33022,
    power: 23,
  },
  R: {
    value: 2439.7,
    power: 3,
  },
  g: {
    active: 'short',
    short: {
      value: 3.7,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
