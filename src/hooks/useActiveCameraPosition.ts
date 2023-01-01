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

  const meteoriteRadius = useMeteoriteRadius().radius
  const meteoritePosition = useMeteoritePosition()
  const meteoriteRotationAngle = useMeteoriteRotationAngel()

  const velocityVector = ratioVector(
    getVectorFromAngelAndVector(meteoriteRotationAngle, {
      x: 0,
      y: meteoritePosition.y,
    }),
  )

  if (modelingStatus === 'idle' || activeCamera === '@BackViewCamera') {
    return new THREE.Vector3(
      velocityVector.x,
      meteoritePosition.y + getRadiusCoefficient(meteoriteRadius),
      velocityVector.y,
    )
  }

  if (activeCamera === '@SideViewCamera') {
    return new THREE.Vector3(
      velocityVector.y,
      meteoritePosition.y,
      velocityVector.x,
    )
  }

  return new THREE.Vector3(0, 1, 0)
}

function getRadiusCoefficient(radius: number) {
  if (radius < 0.02) return 0.15
  if (radius < 0.1) return 0.1

  return radius * 1.7
}
