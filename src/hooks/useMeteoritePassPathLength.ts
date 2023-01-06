import { scaleMeters } from '@utils'
import { useSelector } from 'react-redux'
import {
  selectModelingTime,
  selectModelingMeteoriteAverageVelocity,
} from '@selectors'

export const useMeteoritePassPathLength = () => {
  const passTime = useSelector(selectModelingTime)
  const averageVelocity = useSelector(selectModelingMeteoriteAverageVelocity)

  return passTime.ticks
    ? scaleMeters(averageVelocity * passTime.ticks) / 1000
    : 0
}
