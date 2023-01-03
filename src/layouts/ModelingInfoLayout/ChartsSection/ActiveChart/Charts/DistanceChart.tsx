import { useActiveChartPoints } from '@hooks'
import { AtmosphereLayersChart } from '@components'
import { CHART_LAST_POINTS_AMOUNT, CALCULATION_INTERVAL_MS } from '@slices'
import { metersToDistanceString, ticksToString, ticksToTime } from '@utils'

export const DistanceChart = () => {
  const { points, isTotal } = useActiveChartPoints()

  const label = `Пройденное метеоритом расстояние (км)${
    isTotal
      ? ''
      : `. *Последние ${
          ticksToTime(CALCULATION_INTERVAL_MS * CHART_LAST_POINTS_AMOUNT)
            .seconds
        }с.`
  }`

  return (
    <AtmosphereLayersChart
      points={points}
      label={label}
      xName='Время'
      yName='Расстояние'
      xUnit='мин'
      xFormatter={(value) => {
        return ticksToString(value as number, 1000 * 60)
      }}
      yFormatter={(value) => {
        return metersToDistanceString(value as number, 1000)
      }}
    />
  )
}
