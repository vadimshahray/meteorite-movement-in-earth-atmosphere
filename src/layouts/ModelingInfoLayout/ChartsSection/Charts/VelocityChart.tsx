import { LinearChart, ChartPointData } from 'components'

export const VelocityChart = () => {
  const data: ChartPointData[] = [
    { x: 100, y: 200 },
    { x: 110, y: 210 },
    { x: 120, y: 220 },
    { x: 130, y: 130 },
    { x: 140, y: 240 },
    { x: 140, y: 240 },
    { x: 140, y: 240 },
    { x: 140, y: 240 },
    { x: 140, y: 240 },
    { x: 100, y: 200 },
    { x: 110, y: 210 },
  ]

  return <LinearChart data={data} label='V(t)' />
}
