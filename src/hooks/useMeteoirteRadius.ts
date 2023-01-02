import { useSelector } from 'react-redux'
import { selectMeteoriteRadius } from 'selectors'
import { scaleMeters } from 'utils'

export const useMeteoriteRadius = () => {
  const radius = useSelector(selectMeteoriteRadius)

  return scaleMeters(radius)
}
