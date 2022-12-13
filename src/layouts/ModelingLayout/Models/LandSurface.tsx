import { Environment } from '@react-three/drei'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'

export const LandSurface = () => {
  const colorMode = useSelector(selectThemeColorMode)

  const files =
    colorMode === 'light'
      ? 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dry_cracked_lake_1k.hdr'
      : 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/preller_drive_4k.hdr'

  return (
    <>
      <Environment
        files={files}
        ground={{ height: 1, radius: 1000, scale: 38 }}
      ></Environment>
    </>
  )
}
