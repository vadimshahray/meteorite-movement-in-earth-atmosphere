import { Environment } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'

export default React.memo(({ visible, ...props }: GroupProps) => {
  const colorMode = useSelector(selectThemeColorMode)

  const ground = { height: 1, radius: 1000, scale: 38 }

  return (
    <group visible={visible} {...props}>
      <group visible={colorMode === 'light'}>
        <Environment files='/models/hdr/light.hdr' ground={ground} />
      </group>

      <group visible={colorMode === 'dark'}>
        <Environment files='/models/hdr/dark.hdr' ground={ground} />
      </group>
    </group>
  )
})
