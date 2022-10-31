import { G } from './constants'

/** Дефолтная конфигурация планеты */
export const defaultPlanet: PlanetData = {
  R: 0,
  M: 0,
  g: {
    active: 'short',
    short: 0,
    detailed: {
      G,
    },
  },
}
