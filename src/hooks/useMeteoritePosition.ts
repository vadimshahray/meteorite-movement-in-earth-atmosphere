import { useSelector } from 'react-redux'
import { selectMeteoriteDistance } from 'selectors'
import * as THREE from 'three'
import { scaleMeters } from 'utils'
import { useEarthRadius } from './useEarthRadius'

export const useMeteoritePosition = () => {
  const EarthRadius = useEarthRadius()
  const y0 = scaleMeters(useSelector(selectMeteoriteDistance))

  return new THREE.Vector3(0, EarthRadius + y0, 0)
}
