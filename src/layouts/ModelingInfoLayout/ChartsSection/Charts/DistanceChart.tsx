import { AtmosphereLayersChart } from 'components'
import { useActiveChartPoints } from 'hooks'
import { metersToDistanceString, ticksToString } from 'utils'

export const DistanceChart = () => {
  const { points, isTotal } = useActiveChartPoints()

  return (
    <AtmosphereLayersChart
      points={points}
      type={isTotal ? 'number' : 'category'}
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
