import { LineChart } from '@components'
import { useActiveChartPoints } from '@hooks'
import { metersToVelocityString, ticksToTime, ticksToString } from '@utils'
import { CHART_LAST_POINTS_AMOUNT, CALCULATION_INTERVAL_MS } from '@constants'

export const VelocityChart = () => {
  const { points, isTotal } = useActiveChartPoints()

  const label = `Скорость метеорита (м/с) во время падения${
    isTotal
      ? ''
      : `. *Последние ${
          ticksToTime(CALCULATION_INTERVAL_MS * CHART_LAST_POINTS_AMOUNT)
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
