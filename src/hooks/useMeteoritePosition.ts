import { EARTH_RADIUS } from 'layouts/ModelingLayout/Models'
import { useSelector } from 'react-redux'
import { selectObjectModely0 } from 'selectors'
import * as THREE from 'three'
import { scaleMeters } from 'utils'

export const useMeteoritePosition = () => {
  const y0 = scaleMeters(useSelector(selectObjectModely0))

  return new THREE.Vector3(-EARTH_RADIUS - y0, 0, 0)
}
