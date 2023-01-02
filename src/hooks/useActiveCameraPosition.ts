import { useSelector } from 'react-redux'
import { selectActiveCamera, selectModelingStatus } from 'selectors'
import * as THREE from 'three'
import { getVectorFromAngelAndVector, ratioVector } from 'utils'
import { useMeteoriteRadius } from './useMeteoirteRadius'
import { useMeteoritePosition } from './useMeteoritePosition'
import { useMeteoriteRotationAngel } from './useMeteoriteRotationAngel'

export const useActiveCameraPosition = () => {
  const activeCamera = useSelector(selectActiveCamera)
  const modelingStatus = useSelector(selectModelingStatus)

  const meteoriteRadius = useMeteoriteRadius()
  const meteoritePosition = useMeteoritePosition()
  const meteoriteRotationAngle = useMeteoriteRotationAngel()

  if (modelingStatus === 'idle' || activeCamera === '@BackViewCamera') {
    const velocityVector = ratioVector(
      getVectorFromAngelAndVector(meteoriteRotationAngle, {
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

  return new THREE.Vector3(0, 1, 0)
}

const getRadiusCoefficient = (radius: number) => {
  return radius > 0.087 ? radius : (1 - radius) * 0.09
}
