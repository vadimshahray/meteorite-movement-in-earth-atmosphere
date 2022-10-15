/** Гравитационная постоянная */
const G: ConstData<number> = {
  isConst: true,
  view: '6,67 * 10⁻¹¹',
  value: 6.67 * Math.pow(10, -11), // TODO: check pow
}

/** Дефолтная конфигурация планеты "Земля" */
export const EarthPlanet: PlanetData = {
  name: 'Земля',
  g: {
    active: 'short',
    short: 9.87, //TODO: уточнить
    detailed: {
      G: {
        isConst: true,
        view: '6,67 * 10⁻¹¹',
        value: 6.67 * Math.pow(10, -11), // TODO: check pow
      },
      M: 0, // TODO: fill
      R: 0, // TODO: fill
    },
  },
}

/** Дефолтная конфигурация планеты "Марс" */
export const MarsPlanet: PlanetData = {
  name: 'Марс',
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
