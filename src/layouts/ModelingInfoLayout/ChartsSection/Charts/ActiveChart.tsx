import { useSelector } from 'react-redux'
import { selectActiveChart } from 'selectors'
import { DistanceChart } from './DistanceChart'
import { VelocityChart } from './VelocityChart'

export const ActiveChart = () => {
  const activeChart = useSelector(selectActiveChart)

  return activeChart === '@VelocityChart' ? (
    <VelocityChart />
  ) : (
    <DistanceChart />
  )
}
