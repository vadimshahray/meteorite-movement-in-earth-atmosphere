import * as THREE from 'three'
import { scaleMeters } from 'utils'
import { useSelector } from 'react-redux'
import { useEarthRadius } from './useEarthRadius'
import { useMeteoriteRadius } from './useMeteoriteRadius'
import {
  selectModelingStatus,
  selectMeteoriteDistance,
  selectModelingMeteoriteDistance,
} from 'selectors'

export const useMeteoritePosition = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  const EarthRadius = useEarthRadius()
  const meteoriteRadius = useMeteoriteRadius()

  const distance = useSelector(
    modelingStatus === 'idle'
      ? selectMeteoriteDistance
      : selectModelingMeteoriteDistance,
  )

  return new THREE.Vector3(
    0,
    EarthRadius + meteoriteRadius + scaleMeters(distance),
    0,
  )
}
