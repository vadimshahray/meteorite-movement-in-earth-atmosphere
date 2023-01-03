import { scaleMeters } from '@utils'
import { useSelector } from 'react-redux'
import { selectMeteoriteRadius } from '@selectors'

export const useMeteoriteRadius = () => {
  const radius = useSelector(selectMeteoriteRadius)

  return scaleMeters(radius)
}
