import { Environment } from '@react-three/drei'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'
import { DaySky } from './DaySky'
import { NightSky } from './NightSky'

export const LandSurface = () => {
  const colorMode = useSelector(selectThemeColorMode)

  return (
    <>
      <Environment
        files={
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr'
        }
        ground={{ height: 5, radius: 10, scale: 38 }}
      ></Environment>

      {colorMode === 'light' ? <DaySky /> : <NightSky />}
    </>
  )
}
