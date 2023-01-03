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

  if (modelingStatus === 'idle' || activeCamera === '@BackViewCamera') {
    const velocityVector = ratioVector(
      getVectorFromAngleAndVector(meteoriteRotationAngle, {
        x: 0,
        y: meteoritePosition.y,
      }),
    )

    velocityVector.x *= meteoriteRadius
    velocityVector.y *= meteoriteRadius

    return new THREE.Vector3(
      velocityVector.y,
      meteoritePosition.y + 2 * getRadiusCoefficient(meteoriteRadius),
      velocityVector.x,
    )
  }

  if (activeCamera === '@SideViewCamera') {
    return new THREE.Vector3(
      meteoritePosition.x,
      meteoritePosition.y,
      meteoritePosition.z + 2 * getRadiusCoefficient(meteoriteRadius),
    )
  }

  return new THREE.Vector3(0, EarthRadius, 0)
}

const getRadiusCoefficient = (radius: number) => {
  return radius > 0.087 ? radius : (1 - radius) * 0.09
}
