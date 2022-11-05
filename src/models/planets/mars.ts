import { G } from './constants'

/** Дефолтная конфигурация планеты "Марс" */
export const MarsPlanet: PlanetData = {
  M: {
    value: 11,
    power: 1,
  }, // TODO: fill
  R: {
    value: 22,
    power: 1,
  }, // TODO: fill
  g: {
    active: 'short',
    short: {
      value: 11,
      power: 1,
    }, //TODO: уточнить
    detailed: {
      G,
    },
  },
}
