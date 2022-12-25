type ModelingInfoSliceState = {
  activeChart: Charts

  chartsPoints: Record<Charts, ModelingInfoChartPoints>
  pointsPassed: number
}

interface ModelingInfoSlice extends SliceCaseReducers<ModelingInfoSliceState> {
  setActiveChart(
    state: ModelingInfoSliceState,
    action: PayloadAction<Charts>,
  ): void
}
