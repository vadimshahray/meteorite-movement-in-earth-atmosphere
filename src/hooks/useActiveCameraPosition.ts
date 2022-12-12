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
    meteoritePosition.x - scaleMeters(5 * 1000),
    meteoriteRadius + scaleMeters(1 * 1000),
    meteoriteRadius + scaleMeters(4 * 1000),
  )

  if (!isModeling) {
    return sidePositionVector
  }

  switch (activeCamera) {
    case '@SideViewCamera':
      return sidePositionVector
    case '@EarthViewCamera':
      return new THREE.Vector3(0, 0, 0)
    default:
      return new THREE.Vector3(
        meteoritePosition.x - scaleMeters(5 * 1000),
        meteoriteRadius + scaleMeters(1 * 1000),
        meteoriteRadius,
      )
  }
}
