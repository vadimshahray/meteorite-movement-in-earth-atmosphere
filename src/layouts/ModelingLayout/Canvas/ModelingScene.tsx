import { useFrame, useThree } from '@react-three/fiber'
import CameraControls from 'camera-controls'
import {
  useActiveCameraPosition,
  useMeteoritePosition,
  useMeteoriteRotationAngel,
} from 'hooks'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveCamera } from 'selectors'
import * as THREE from 'three'
import { Meteorite } from '../Models'

const Earth = React.lazy(() => import('../Models/Earth/Earth'))
const LandSurface = React.lazy(() => import('../Models/LandSurface'))

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
