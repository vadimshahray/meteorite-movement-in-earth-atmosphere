import { G } from './constants'

/** Дефолтная конфигурация планеты "Марс" */
export const MarsPlanet: PlanetData = {
  g: {
    active: 'short',
    short: 11, //TODO: уточнить
    detailed: {
      G,
      M: 11, // TODO: fill
      R: 22, // TODO: fill
    },
  },
}
