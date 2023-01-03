type Charts = '@VelocityChart' | '@DistanceChart'

type Chart = {
  key: Charts
  name: string
}

type ChartPoint = {
  x: number
  y: number
}

type ModelingInfoChartPoints = {
  lastPoints: ChartPoint[]
  totalPoints: ChartPoint[]
}
