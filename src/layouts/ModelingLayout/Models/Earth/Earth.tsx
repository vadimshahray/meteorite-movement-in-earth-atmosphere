import { Sphere, useGLTF } from '@react-three/drei'
import { EARTH } from 'consts'
import { useEarthPosition } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'
import { EarthLight } from './EarthLight'
import { EarthNight } from './EarthNight'

const EARTH_MODEL_RADIUS = 1.7320494310588754

export const EARTH_RADIUS = (1.0 / EARTH_MODEL_RADIUS) * EARTH.RADIUS * 0.00001

export const Earth = React.memo(() => {
  const colorMode = useSelector(selectThemeColorMode)
  const earthPosition = useEarthPosition()

  return (
    <group position={earthPosition}>
      <EarthLight scale={EARTH_RADIUS} visible={colorMode === 'light'} />
      <EarthNight scale={EARTH_RADIUS} visible={colorMode === 'dark'} />

      <Sphere scale={EARTH_RADIUS + 1}>
        <meshStandardMaterial color='#318ce7' opacity={0.19} transparent />
      </Sphere>
    </group>
  )
})
