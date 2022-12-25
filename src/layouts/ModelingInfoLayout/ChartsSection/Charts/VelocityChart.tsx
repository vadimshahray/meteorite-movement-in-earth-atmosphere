import { LineChart } from 'components'
import { useActiveChartPoints } from 'hooks'
import { metersToVelocityString, ticksToString } from 'utils'

export const VelocityChart = () => {
  const points = useActiveChartPoints()

  return (
    <LineChart
      points={points}
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
