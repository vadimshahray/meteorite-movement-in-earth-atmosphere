import { AtmosphereLayersChart } from 'components'
import { useActiveChartPoints } from 'hooks'
import { CHART_LAST_POINTS_AMOUNT, MODELING_TIMER_INTERVAL_MS } from 'slices'
import { metersToDistanceString, ticksToString, ticksToTimer } from 'utils'

export const DistanceChart = () => {
  const { points, isTotal } = useActiveChartPoints()

  const label = isTotal
    ? 'Данные за все время'
    : `Данные за последние ${
        ticksToTimer(MODELING_TIMER_INTERVAL_MS * CHART_LAST_POINTS_AMOUNT)
          .seconds
      }с`

  return (
    <AtmosphereLayersChart
      points={points}
      type={isTotal ? 'number' : 'category'}
      label={label}
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
