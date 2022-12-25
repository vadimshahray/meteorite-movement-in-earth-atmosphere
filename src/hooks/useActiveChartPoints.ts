import { useSelector } from 'react-redux'
import {
  selectActiveChartLastPoints,
  selectActiveChartTotalPoints,
  selectModelingStatus,
} from 'selectors'

export const useActiveChartPoints = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  const lastPoints = useSelector(selectActiveChartLastPoints)
  const totalPoints = useSelector(selectActiveChartTotalPoints)

  return modelingStatus === 'processing' || totalPoints.length <= 1
    ? lastPoints
    : totalPoints
}
