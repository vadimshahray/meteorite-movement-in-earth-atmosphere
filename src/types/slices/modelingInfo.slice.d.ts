type ModelingInfoSliceState = {
  activeChart: Charts

  chartsPoints: Record<Charts, ModelingInfoChartPoints>
  pointsPassed: number

  meteoriteVelocity: {
    max: number
    average: number
  }

  collisionTime: Timer
}

interface ModelingInfoSlice extends SliceCaseReducers<ModelingInfoSliceState> {
  setActiveChart(
    state: ModelingInfoSliceState,
    action: PayloadAction<Charts>,
  ): void
}
