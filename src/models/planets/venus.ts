import { G } from './constants'

/** Дефолтная конфигурация планеты "Венера" */
export const VenusPlanet: PlanetData = {
  M: {
    value: 4.8675,
    power: 24,
  },
  R: {
    value: 6051.8,
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
