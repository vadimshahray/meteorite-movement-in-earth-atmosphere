import { useFrame, useThree } from '@react-three/fiber'
import CameraControls from 'camera-controls'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'
import * as THREE from 'three'
import { Earth, Meteorite } from '../Models'

CameraControls.install({ THREE })

export const ModelingScene = () => {
  const isModeling = useSelector(selectIsModeling)

  const posVector = new THREE.Vector3(0, 0, 0)

  const { camera, gl } = useThree()
  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement],
  )

  useFrame(({ camera }, delta) => {
    if (isModeling) {
      posVector.set(-20, 0, 0)
    } else {
      posVector.set(-5, 2, 5)
    }

    camera.position.lerp(posVector, 0.8)
    camera.updateProjectionMatrix()

    controls.setLookAt(
      camera.position.x,
      camera.position.y,
      camera.position.z,
      0,
      0,
      0,
      true,
    )

    return controls.update(delta)
  })

  return (
    <>
      <Meteorite />
      <Earth />
    </>
  )
}
