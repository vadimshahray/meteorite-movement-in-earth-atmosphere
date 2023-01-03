import { useSelector } from 'react-redux'
import {
  selectModelingStatus,
  selectActiveChartLastPoints,
  selectActiveChartTotalPoints,
} from 'selectors'

export const useActiveChartPoints = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  const lastPoints = useSelector(selectActiveChartLastPoints)
  const totalPoints = useSelector(selectActiveChartTotalPoints)

  return {
    points:
      modelingStatus === 'processing' || totalPoints.length <= 1
        ? lastPoints
        : totalPoints,
    isTotal: modelingStatus !== 'processing',
  }
}
