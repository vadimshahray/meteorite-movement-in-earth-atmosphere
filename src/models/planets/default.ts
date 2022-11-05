import { G } from './constants'

/** Дефолтная конфигурация планеты */
export const defaultPlanet: PlanetData = {
  R: {
    value: 0,
    power: 1,
  },
  M: {
    value: 0,
    power: 1,
  },
  g: {
    active: 'short',
    short: {
      value: 0,
      power: 1,
    },
    detailed: {
      G,
    },
  },
}
