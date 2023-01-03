import { useSelector } from 'react-redux'
import { selectThemeColorMode } from 'selectors'
import {
  EARTH_LIGHT_RADIUS_SCALE,
  EARTH_NIGHT_RADIUS_SCALE,
} from 'constants/models'

export const useEarthRadius = () => {
  const colorMode = useSelector(selectThemeColorMode)

  return colorMode === 'light'
    ? EARTH_LIGHT_RADIUS_SCALE
    : EARTH_NIGHT_RADIUS_SCALE
}
