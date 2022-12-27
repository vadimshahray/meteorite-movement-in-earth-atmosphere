import { LineChart } from 'components'
import { useActiveChartPoints } from 'hooks'
import { CHART_LAST_POINTS_AMOUNT, CALCULATION_INTERVAL_MS } from 'slices'
import { metersToVelocityString, ticksToTimer, ticksToString } from 'utils'

export const VelocityChart = () => {
  const { points, isTotal } = useActiveChartPoints()

  const label = `Скорость метеорита (м/с) во время падения${
    isTotal
      ? ''
      : `. *Последние ${
          ticksToTimer(CALCULATION_INTERVAL_MS * CHART_LAST_POINTS_AMOUNT)
            .seconds
        }с.`
  }`

  return (
    <LineChart
      points={points}
      label={label}
      xName='Время'
      yName='Скорость'
      xUnit='мин'
      xFormatter={(value) => {
        return ticksToString(value as number, 1000 * 60)
      }}
      yFormatter={(value) => {
        return metersToVelocityString(value as number)
      }}
    />
  )
}
