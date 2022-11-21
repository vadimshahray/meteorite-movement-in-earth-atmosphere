import { G } from './constants'

/** Дефолтная конфигурация планеты "Нептун" */
export const NeptunePlanet: PlanetData = {
  M: {
    value: 1.0243,
    power: 26,
  },
  R: {
    value: 24622,
    power: 3,
  },
  g: {
    active: 'short',
    short: {
      value: 11.15,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
