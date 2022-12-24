import { LinearChart } from 'components'
import { useSelector } from 'react-redux'
import { selectActiveChartPoints } from 'selectors'
import { metersToVelocityString, ticksToString } from 'utils'

export const VelocityChart = () => {
  const points = useSelector(selectActiveChartPoints)

  return (
    <LinearChart
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
