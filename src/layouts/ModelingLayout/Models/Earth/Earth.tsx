import { Sphere, useGLTF } from '@react-three/drei'
import { EARTH } from 'consts'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectObjectModely0, selectThemeColorMode } from 'selectors'
import { getRadiusNorm, scaleMeters } from 'utils'
import { EarthLight } from './EarthLight'
import { EarthNight } from './EarthNight'

const EARTH_MODEL_RADIUS = 1.7320494310588754

export const EARTH_RADIUS =
  getRadiusNorm(EARTH_MODEL_RADIUS) * scaleMeters(EARTH.RADIUS)

export const Earth = React.memo(() => {
  const colorMode = useSelector(selectThemeColorMode)

  const distance = scaleMeters(useSelector(selectObjectModely0))

  return (
    <group position={[EARTH_RADIUS + distance, 0, 0]}>
      <EarthLight scale={EARTH_RADIUS} visible={colorMode === 'light'} />
      <EarthNight scale={EARTH_RADIUS} visible={colorMode === 'dark'} />

      <Sphere scale={EARTH_RADIUS + 1}>
        <meshStandardMaterial color='#318ce7' opacity={0.19} transparent />
      </Sphere>
    </group>
  )
})
