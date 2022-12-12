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

      {/* <Sphere scale={EARTH_RADIUS + EARTH_RADIUS * 0.003}>
        <meshStandardMaterial color='#b3d9ff' opacity={0.3} transparent />
      </Sphere>
      <Sphere scale={EARTH_RADIUS + EARTH_RADIUS * 0.008}>
        <meshStandardMaterial color='#b9dcff' opacity={0.3} transparent />
      </Sphere>
      <Sphere scale={EARTH_RADIUS + EARTH_RADIUS * 0.012}>
        <meshStandardMaterial color='#c0e0ff' opacity={0.3} transparent />
      </Sphere>
      <Sphere scale={EARTH_RADIUS + EARTH_RADIUS * 0.017}>
        <meshStandardMaterial color='#cce6ff' opacity={0.3} transparent />
      </Sphere> */}
    </group>
  )
})
