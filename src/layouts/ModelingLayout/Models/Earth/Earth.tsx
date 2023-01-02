import { GroupProps } from '@react-three/fiber'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'
import { EARTH_LIGHT_RADIUS } from './EarthLight'
import { EARTH_NIGHT_RADIUS } from './EarthNight'

const EarthNight = React.lazy(() => import('./EarthNight/EarthNight'))
const EarthLight = React.lazy(() => import('./EarthLight/EarthLight'))

export default React.memo(({ visible, ...props }: GroupProps) => {
  const colorMode = useSelector(selectThemeColorMode)

  return (
    <group visible={visible} {...props}>
      <EarthLight scale={EARTH_LIGHT_RADIUS} visible={colorMode === 'light'} />

      <EarthNight scale={EARTH_NIGHT_RADIUS} visible={colorMode === 'dark'} />
    </group>
  )
})
