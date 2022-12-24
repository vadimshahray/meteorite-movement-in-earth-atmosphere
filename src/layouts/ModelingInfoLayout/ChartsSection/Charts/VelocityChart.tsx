import { LinearChart } from 'components'
import { useSelector } from 'react-redux'
import { selectActiveChartPoints } from 'selectors'

export const VelocityChart = () => {
  const points = useSelector(selectActiveChartPoints)

  return <LinearChart points={points} label='V(t)' xName='t' yName='V(t)' />
}
