import { LineChart } from 'components'
import { useActiveChartPoints } from 'hooks'
import { CHART_LAST_POINTS_AMOUNT, MODELING_TIMER_INTERVAL_MS } from 'slices'
import { metersToVelocityString, ticksToTimer, ticksToString } from 'utils'

export const VelocityChart = () => {
  const { points, isTotal } = useActiveChartPoints()

  const label = isTotal
    ? 'Данные за все время'
    : `Данные за последние ${
        ticksToTimer(MODELING_TIMER_INTERVAL_MS * CHART_LAST_POINTS_AMOUNT)
          .seconds
      }с`

  return (
    <LineChart
      points={points}
      label={label}
      xName='Время'
      yName='Скорость'
      xFormatter={(value) => {
        return ticksToString(value as number)
      }}
      yFormatter={(value) => {
        return metersToVelocityString(value as number)
      }}
    />
  )
}
