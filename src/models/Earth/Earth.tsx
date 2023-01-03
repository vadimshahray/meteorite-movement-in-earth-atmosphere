import React from 'react'
import { useSelector } from 'react-redux'
import { useEarthAutorotation } from 'hooks'
import { GroupProps } from '@react-three/fiber'
import { selectThemeColorMode } from 'selectors'

const EarthLight = React.lazy(() => import('./EarthLight/EarthLight'))
const EarthNight = React.lazy(() => import('./EarthNight/EarthNight'))

export default React.memo(({ visible, ...props }: GroupProps) => {
  const colorMode = useSelector(selectThemeColorMode)

  const angleY = useEarthAutorotation()

  return (
    <group visible={visible} rotation={[0, angleY, 0]} {...props}>
      <EarthLight visible={colorMode === 'light'} />

      <EarthNight visible={colorMode === 'dark'} />
    </group>
  )
})
