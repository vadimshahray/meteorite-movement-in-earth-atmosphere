import { G } from './constants'

/** Дефолтная конфигурация планеты */
export const defaultPlanet: PlanetData = {
  M: 0,
  R: 0,
  g: {
    active: 'short',
    short: 0,
    detailed: {
      G,
    },
  },
}
