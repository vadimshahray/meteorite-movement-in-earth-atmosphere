import { EARTH_LIGHT_RADIUS } from 'layouts/ModelingLayout/Models/Earth/EarthLight'
import { EARTH_NIGHT_RADIUS } from 'layouts/ModelingLayout/Models/Earth/EarthNight'
import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'

export const useEarthRadius = () => {
  const colorMode = useSelector(selectThemeColorMode)

  return colorMode === 'light' ? EARTH_LIGHT_RADIUS : EARTH_NIGHT_RADIUS
}
