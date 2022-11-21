import { G } from './constants'

/** Дефолтная конфигурация планеты "Сатурн" */
export const SaturnPlanet: PlanetData = {
  M: {
    value: 5.6846,
    power: 26,
  },
  R: {
    value: 58232,
    power: 3,
  },
  g: {
    active: 'short',
    short: {
      value: 10.44,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
