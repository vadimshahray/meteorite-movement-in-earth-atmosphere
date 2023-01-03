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
