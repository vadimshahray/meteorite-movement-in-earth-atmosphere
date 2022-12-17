import { useSelector } from 'react-redux'
import { selectActiveCamera, selectIsModeling } from 'selectors'
import * as THREE from 'three'
import { useMeteoriteRadius } from './useMeteoirteRadius'
import { useMeteoritePosition } from './useMeteoritePosition'

export const useActiveCameraPosition = () => {
  const isModeling = useSelector(selectIsModeling)
  const activeCamera = useSelector(selectActiveCamera)

  const meteoritePosition = useMeteoritePosition()
  const meteoriteRadius = useMeteoriteRadius().radius

  const backViewPisitionVector = new THREE.Vector3(
    meteoritePosition.x,
    meteoritePosition.y + getRadiusCoefficient(meteoriteRadius),
    meteoritePosition.z,
  )
  if (!isModeling) {
    return backViewPisitionVector
  }

  switch (activeCamera) {
    case '@BackViewCamera':
      return backViewPisitionVector
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
