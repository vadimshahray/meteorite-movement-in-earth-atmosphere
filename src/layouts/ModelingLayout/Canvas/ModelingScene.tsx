import * as THREE from 'three'
import { Meteorite } from 'models'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import CameraControls from 'camera-controls'
import { selectActiveCamera } from 'selectors'
import { useFrame, useThree } from '@react-three/fiber'
import { useMeteoritePosition, useActiveCameraPosition } from 'hooks'

const Earth = React.lazy(() => import('models/Earth/Earth'))
const LandSurface = React.lazy(() => import('models/LandSurface'))

CameraControls.install({ THREE })

export const ModelingScene = () => {
  const activeCamera = useSelector(selectActiveCamera)
  const cameraPosition = useActiveCameraPosition()

  const { camera, gl } = useThree()
  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement],
  )

  controls.enabled = false

  const meteoritePosition = useMeteoritePosition()

  useFrame(({ camera }, delta) => {
    camera.position.lerp(cameraPosition, 0.8)
    camera.updateProjectionMatrix()

    controls.setLookAt(
      camera.position.x,
      camera.position.y,
      camera.position.z,
      meteoritePosition.x,
      meteoritePosition.y,
      meteoritePosition.z,
      true,
    )

    return controls.update(delta)
  })

  return (
    <>
      <Meteorite />

      <Earth visible={activeCamera !== '@EarthViewCamera'} />

      <LandSurface visible={activeCamera === '@EarthViewCamera'} />
    </>
  )
}
