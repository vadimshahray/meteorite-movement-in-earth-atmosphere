type Charts = '@VelocityChart' | '@DistanceChart'

type ChartInfo = {
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
