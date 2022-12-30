import { GroupProps } from '@react-three/fiber'
import { EARTH } from 'consts'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'

const EarthNight = React.lazy(() => import('./EarthNight/EarthNight'))
const EarthLight = React.lazy(() => import('./EarthLight/EarthLight'))

const EARTH_MODEL_RADIUS = 1.7320494310588754

export const EARTH_RADIUS = (1.0 / EARTH_MODEL_RADIUS) * EARTH.RADIUS * 0.00001

export default React.memo(({ visible, ...props }: GroupProps) => {
  const colorMode = useSelector(selectThemeColorMode)

  return (
    <group visible={visible} {...props}>
      <EarthLight scale={EARTH_RADIUS} visible={colorMode === 'light'} />
      <EarthNight scale={EARTH_RADIUS} visible={colorMode === 'dark'} />
    </group>
  )
})