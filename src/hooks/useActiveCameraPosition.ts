import { useSelector } from 'react-redux'
import { selectActiveCamera, selectIsModeling } from 'selectors'
import * as THREE from 'three'

export const useActiveCameraPosition = () => {
  const activeCamera = useSelector(selectActiveCamera)
  const isModeling = useSelector(selectIsModeling)

  if (!isModeling) {
    return new THREE.Vector3(-20, 0, 0)
  }

  switch (activeCamera) {
    case '@SideViewCamera':
      return new THREE.Vector3(0, 0, 0)
    case '@EarthViewCamera':
      return new THREE.Vector3(0, 0, -5)
    default:
      return new THREE.Vector3(-5, 2, 5)
  }
}
