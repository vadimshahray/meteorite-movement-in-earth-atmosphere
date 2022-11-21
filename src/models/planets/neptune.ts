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
    short: 11.15,
    detailed: {
      G,
    },
  },
}
