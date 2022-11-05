import { G } from './constants'

/** Дефолтная конфигурация планеты "Земля" */
export const EarthPlanet: PlanetData = {
  R: {
    value: 0,
    power: 1,
  }, // TODO: fill
  M: {
    value: 0,
    power: 1,
  }, // TODO: fill
  g: {
    active: 'short',
    short: {
      value: 9.87,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
