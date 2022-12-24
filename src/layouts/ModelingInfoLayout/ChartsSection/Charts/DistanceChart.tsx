import { LinearChart } from 'components'
import { useSelector } from 'react-redux'
import { selectActiveChartPoints } from 'selectors'

export const DistanceChart = () => {
  const points = useSelector(selectActiveChartPoints)

  return <LinearChart points={points} label='D(t)' xName='t' yName='D(t)' />
}
