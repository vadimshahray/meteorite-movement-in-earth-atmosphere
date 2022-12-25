import { LineChart } from 'components'
import { useActiveChartPoints } from 'hooks'
import { metersToVelocityString, ticksToString } from 'utils'

export const VelocityChart = () => {
  const { points, isTotal } = useActiveChartPoints()

  return (
    <LineChart
      points={points}
      type={isTotal ? 'number' : 'category'}
      label='V(t)'
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
