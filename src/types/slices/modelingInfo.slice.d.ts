type ModelingInfoSliceState = {
  activeChart: Charts

  pointsPassed: number
  chartsPoints: Record<Charts, ModelingInfoChartPoints>

  collisionTime: Time

  meteoriteVelocity: {
    max: number
    average: number
  }
}

interface ModelingInfoSlice extends SliceCaseReducers<ModelingInfoSliceState> {
  setActiveChart(
    state: ModelingInfoSliceState,
    action: PayloadAction<Charts>,
  ): void
}

type ModelingInfoChartPoints = {
  lastPoints: ChartPoint[]
  totalPoints: ChartPoint[]
}

type ModelingInfoChartNewPoints = {
  lastPoints: ChartPoint[]
  totalPoint?: ChartPoint
}

type ModelingInfoChartNewPointInfo = {
  isLastPoint: boolean
  pointsPassed: number
}
