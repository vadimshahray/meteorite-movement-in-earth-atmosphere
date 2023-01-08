import * as THREE from 'three'
import { useSelector } from 'react-redux'
import { getVectorFromAngleAndVector, ratioVector } from '@utils'
import { selectActiveCamera, selectModelingStatus } from '@selectors'
import {
  useEarthRadius,
  useMeteoriteRadius,
  useMeteoritePosition,
  useMeteoriteRotationAngle,
} from '@hooks'

export const useActiveCameraPosition = () => {
  const activeCamera = useSelector(selectActiveCamera)
  const modelingStatus = useSelector(selectModelingStatus)

  const EarthRadius = useEarthRadius()

  const meteoriteRadius = useMeteoriteRadius()
  const meteoritePosition = useMeteoritePosition()
  const meteoriteRotationAngle = useMeteoriteRotationAngle()

  const velocityVector = ratioVector(
    getVectorFromAngleAndVector(meteoriteRotationAngle, {
      x: 0,
      y: meteoritePosition.y,
    }),
  )

  velocityVector.x *= getRadiusCoefficient(meteoriteRadius)
  velocityVector.y *= getRadiusCoefficient(meteoriteRadius)

  if (modelingStatus === 'idle' || activeCamera === '@BackViewCamera') {
    return new THREE.Vector3(
      meteoritePosition.x,
      meteoritePosition.y + velocityVector.y,
      meteoritePosition.z + velocityVector.x,
    )
  }

  if (activeCamera === '@SideViewCamera') {
    return new THREE.Vector3(
      meteoritePosition.x,
      meteoritePosition.y,
      meteoritePosition.z + getRadiusCoefficient(meteoriteRadius),
    )
  }

  return new THREE.Vector3(0, EarthRadius, 0)
}

const getRadiusCoefficient = (radius: number) => {
  return 3.2 * radius
}
