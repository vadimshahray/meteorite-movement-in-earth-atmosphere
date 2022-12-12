import { EARTH_RADIUS } from 'layouts/ModelingLayout/Models'
import { useSelector } from 'react-redux'
import { selectActiveCamera, selectIsModeling } from 'selectors'
import * as THREE from 'three'
import { useEarthPosition } from './useEarthPosition'

export const useActiveCameraPosition = () => {
  const isModeling = useSelector(selectIsModeling)
  const activeCamera = useSelector(selectActiveCamera)

  const EarthPosition = useEarthPosition()
  EarthPosition.setX(EarthPosition.x - EARTH_RADIUS)

  if (!isModeling) {
    return new THREE.Vector3(-4, 1, 4)
  }

  switch (activeCamera) {
    case '@SideViewCamera':
      return new THREE.Vector3(-2, 1, 5)
    case '@EarthViewCamera':
      return EarthPosition
    default:
      return new THREE.Vector3(-5, 1, 0)
  }
}
