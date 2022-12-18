import { EARTH_RADIUS } from 'layouts/ModelingLayout/Models'
import { useSelector } from 'react-redux'
import { selectMeteoritey0 } from 'selectors'
import * as THREE from 'three'
import { scaleMeters } from 'utils'

export const useMeteoritePosition = () => {
  const y0 = scaleMeters(useSelector(selectMeteoritey0))

  return new THREE.Vector3(0, EARTH_RADIUS + y0, 0)
}
