type ModelingInfoSliceState = {
  activeChart: Charts

  chartsPoints: Record<Charts, ChartPoint[]>
}

interface ModelingInfoSlice extends SliceCaseReducers<ModelingInfoSliceState> {
  setActiveChart(
    state: ModelingInfoSliceState,
    action: PayloadAction<Charts>,
  ): void
}
