import { useSelector } from 'react-redux'
import { selectActiveChart } from '@selectors'
import { DistanceChart, VelocityChart } from './Charts'

export const ActiveChart = () => {
  const activeChart = useSelector(selectActiveChart)

  return activeChart === '@VelocityChart' ? (
    <VelocityChart />
  ) : (
    <DistanceChart />
  )
}
