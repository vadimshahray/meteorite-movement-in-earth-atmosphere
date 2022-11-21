import { G } from './constants'

/** Дефолтная конфигурация планеты "Юпитер" */
export const JupiterPlanet: PlanetData = {
  M: {
    value: 1.8986,
    power: 27,
  },
  R: {
    value: 69911,
    power: 3,
  },
  g: {
    active: 'short',
    short: {
      value: 24.79,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
