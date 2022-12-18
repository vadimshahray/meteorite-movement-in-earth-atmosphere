import { Environment } from '@react-three/drei'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'

export const LandSurface = () => {
  const colorMode = useSelector(selectThemeColorMode)

  const files =
    colorMode === 'light' ? '/models/hdr/light.hdr' : '/models/hdr/dark.hdr'

  return (
    <>
      <Environment
        files={files}
        ground={{ height: 1, radius: 1000, scale: 38 }}
      ></Environment>
    </>
  )
}
