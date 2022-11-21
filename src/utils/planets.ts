import {
  EarthPlanet,
  JupiterPlanet,
  MarsPlanet,
  MercuryPlanet,
  NeptunePlanet,
  SaturnPlanet,
  UranusPlanet,
  VenusPlanet,
} from 'models'

/** Модели планет (названия) */
export const planetModels: PlanetModels = {
  '@Mercury': MercuryPlanet,
  '@Venus': VenusPlanet,
  '@Earth': EarthPlanet,
  '@Mars': MarsPlanet,
  '@Jupiter': JupiterPlanet,
  '@Saturn': SaturnPlanet,
  '@Uranus': UranusPlanet,
  '@Neptune': NeptunePlanet,
}
