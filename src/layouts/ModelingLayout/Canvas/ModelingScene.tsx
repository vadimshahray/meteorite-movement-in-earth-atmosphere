import { useFrame, useThree } from '@react-three/fiber'
import CameraControls from 'camera-controls'
import { useActiveCameraPosition } from 'hooks'
import { useMemo } from 'react'
import * as THREE from 'three'
import { Earth, Meteorite } from '../Models'

CameraControls.install({ THREE })

export const ModelingScene = () => {
  const posVector = useActiveCameraPosition()

  const { camera, gl } = useThree()
  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement],
  )

  useFrame(({ camera }, delta) => {
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
