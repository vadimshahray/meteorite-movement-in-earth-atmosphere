import { LinearChart, ChartPointData } from 'components'

export const DistanceChart = () => {
  const data: ChartPointData[] = [
    { x: 100, y: 200 },
    { x: 110, y: 210 },
    { x: 140, y: 240 },
    { x: 110, y: 210 },
  ]

  return <LinearChart data={data} />
}
