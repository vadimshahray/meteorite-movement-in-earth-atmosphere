import * as THREE from 'three'
import { scaleMeters } from '@utils'
import { useSelector } from 'react-redux'
import {
  useEarthRadius,
  useMeteoriteRadius,
  useMeteoritePassPathLength,
} from '@hooks'
import {
  selectModelingStatus,
  selectMeteoriteDistance,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteLocalSkylineAngle,
} from '@selectors'

export const useMeteoritePosition = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  const EarthRadius = useEarthRadius()
  const meteoriteRadius = useMeteoriteRadius()

  const passPath = useMeteoritePassPathLength()
  const skylineAngle = useSelector(selectModelingMeteoriteLocalSkylineAngle)

  const distance = useSelector(
    modelingStatus === 'idle'
      ? selectMeteoriteDistance
      : selectModelingMeteoriteDistance,
  )

  return new THREE.Vector3(
    0,
    EarthRadius + meteoriteRadius + scaleMeters(distance),
    passPath * Math.sign(180 - 90 + skylineAngle),
  )
}
