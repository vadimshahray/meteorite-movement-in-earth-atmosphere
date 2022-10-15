/** Гравитационная постоянная */
const G: ConstData<number> = {
  isConst: true,
  view: '6,67 * 10⁻¹¹',
  value: 6.67 * Math.pow(10, -11), // TODO: check pow
}

/** Модели планет (названия) */
const planetModels: PlanetModels = {
  '@Earth': EarthPlanet,
  '@Mars': MarsPlanet,
}
