import { G } from './constants'

/** Дефолтная конфигурация планеты "Земля" */
export const EarthPlanet: PlanetData = {
  g: {
    active: 'short',
    short: 9.87, //TODO: уточнить
    detailed: {
      G,
      M: 0, // TODO: fill
      R: 0, // TODO: fill
    },
  },
}
