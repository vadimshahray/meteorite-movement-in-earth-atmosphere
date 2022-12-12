import { EARTH_RADIUS } from 'layouts/ModelingLayout/Models'
import { useSelector } from 'react-redux'
import { selectActiveCamera, selectIsModeling } from 'selectors'
import * as THREE from 'three'
import { useEarthPosition } from './useEarthPosition'
import { useMeteoritePosition } from './useMeteoritePosition'

export const useActiveCameraPosition = () => {
  const isModeling = useSelector(selectIsModeling)
  const activeCamera = useSelector(selectActiveCamera)

  const meteoritePosition = useMeteoritePosition()

  if (!isModeling) {
    return new THREE.Vector3(meteoritePosition.x - 5, 1, 4)
  }

  switch (activeCamera) {
    case '@SideViewCamera':
      return new THREE.Vector3(meteoritePosition.x, 1, 5)
    case '@EarthViewCamera':
      return new THREE.Vector3(0, 0, 0)
    default:
      return new THREE.Vector3(meteoritePosition.x - 5, 1, 0)
  }
}
