import { LinearChart } from 'components'
import { useSelector } from 'react-redux'
import { selectActiveChartPoints } from 'selectors'
import { metersToDistanceString, ticksToString } from 'utils'

export const DistanceChart = () => {
  const points = useSelector(selectActiveChartPoints)

  return (
    <LinearChart
      points={points}
      label='D(t)'
      xName='Время'
      yName='Расстояние'
      xFormatter={(value) => {
        return ticksToString(value as number)
      }}
      yFormatter={(value) => {
        return metersToDistanceString(value as number)
      }}
    />
  )
}
