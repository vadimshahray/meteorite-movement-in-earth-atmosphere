import { G } from './constants'

/** Дефолтная конфигурация планеты "Земля" */
export const EarthPlanet: PlanetData = {
  R: {
    value: 6371,
    power: 3,
  },
  M: {
    value: 5.9726,
    power: 24,
  },
  g: {
    active: 'short',
    short: {
      value: 9.78,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
