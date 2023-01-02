import { Environment } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { useEarthRadius } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'

export default React.memo(({ visible, ...props }: GroupProps) => {
  const colorMode = useSelector(selectThemeColorMode)
  const EarthRadius = useEarthRadius()

  const ground = { height: 10, radius: 1200, scale: 40 }

  return (
    <group position={[0, EarthRadius, 0]} {...props}>
      <group visible={colorMode === 'light'}>
        <Environment
          files={process.env.PUBLIC_URL + '/models/hdr/light.hdr'}
          ground={ground}
        />
      </group>

      <group visible={colorMode === 'dark'}>
        <Environment
          files={process.env.PUBLIC_URL + '/models/hdr/dark.hdr'}
          ground={ground}
        />
      </group>
    </group>
  )
})
