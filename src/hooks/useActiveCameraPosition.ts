import { useSelector } from 'react-redux'
import { selectActiveCamera, selectIsModeling } from 'selectors'
import * as THREE from 'three'
import { scaleMeters } from 'utils'
import { useMeteoriteRadius } from './useMeteoirteRadius'
import { useMeteoritePosition } from './useMeteoritePosition'

export const useActiveCameraPosition = () => {
  const isModeling = useSelector(selectIsModeling)
  const activeCamera = useSelector(selectActiveCamera)

  const meteoritePosition = useMeteoritePosition()
  const meteoriteRadius = useMeteoriteRadius().radius

  const sidePositionVector = new THREE.Vector3(
    meteoritePosition.x + meteoriteRadius * 1.2,
    meteoritePosition.y + meteoriteRadius * 0.4,
    meteoritePosition.z,
  )

  if (!isModeling) {
    return sidePositionVector
  }

  switch (activeCamera) {
    case '@SideViewCamera':
      return sidePositionVector
    case '@EarthViewCamera':
      return new THREE.Vector3(0, 0, 0)
    case '@BackViewCamera':
      return new THREE.Vector3(
        meteoritePosition.x,
        meteoritePosition.y + meteoriteRadius * 0.4,
        meteoritePosition.z + meteoriteRadius * 1.2,
      )
  }
}
