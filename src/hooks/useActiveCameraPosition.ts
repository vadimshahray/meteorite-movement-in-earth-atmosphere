import { useSelector } from 'react-redux'
import { selectActiveCamera, selectModelingStatus } from 'selectors'
import * as THREE from 'three'
import { useMeteoriteRadius } from './useMeteoirteRadius'
import { useMeteoritePosition } from './useMeteoritePosition'

export const useActiveCameraPosition = () => {
  const modelingStatus = useSelector(selectModelingStatus)
  const activeCamera = useSelector(selectActiveCamera)

  const meteoritePosition = useMeteoritePosition()
  const meteoriteRadius = useMeteoriteRadius().radius

  const backViewPositionVector = new THREE.Vector3(
    meteoritePosition.x,
    meteoritePosition.y + getRadiusCoefficient(meteoriteRadius),
    meteoritePosition.z,
  )

  if (modelingStatus === 'idle') {
    return backViewPositionVector
  }

  switch (activeCamera) {
    case '@BackViewCamera':
      return backViewPositionVector
    case '@SideViewCamera':
      return new THREE.Vector3(
        meteoritePosition.x + getRadiusCoefficient(meteoriteRadius),
        meteoritePosition.y,
        meteoritePosition.z,
      )
    case '@EarthViewCamera':
      return new THREE.Vector3(2, 0, -2)
  }
}

function getRadiusCoefficient(radius: number) {
  if (radius < 0.02) return 0.15
  if (radius < 0.1) return 0.1

  return radius * 1.7
}
