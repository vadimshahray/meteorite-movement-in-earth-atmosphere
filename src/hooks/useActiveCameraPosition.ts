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
    meteoritePosition.y + meteoriteRadius * 1.7,
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
        meteoritePosition.x + meteoriteRadius * 1.7,
        meteoritePosition.y + meteoriteRadius,
        meteoritePosition.z,
      )
    case '@EarthViewCamera':
      return new THREE.Vector3(2, 0, -2)
  }
}
