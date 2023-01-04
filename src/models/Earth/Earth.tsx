import React from 'react'
import { useSelector } from 'react-redux'
import { useEarthAutorotation } from '@hooks'
import { GroupProps } from '@react-three/fiber'
import { selectThemeColorMode } from '@selectors'

const EarthDark = React.lazy(() => import('./EarthDark/EarthDark'))
const EarthLight = React.lazy(() => import('./EarthLight/EarthLight'))

export default React.memo(({ visible, ...props }: GroupProps) => {
  const colorMode = useSelector(selectThemeColorMode)

  const angleY = useEarthAutorotation()

  return (
    <group visible={visible} rotation={[0, angleY, 0]} {...props}>
      <EarthDark visible={colorMode === 'dark'} />

      <EarthLight visible={colorMode === 'light'} />
    </group>
  )
})
