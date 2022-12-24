export const selectActiveChart = (state: RootState) =>
  state.modelingInfo.activeChart

export const selectActiveChartPoints = (state: RootState) =>
  state.modelingInfo.chartsPoints[selectActiveChart(state)]

export const selectChartPoints = (chart: Charts) => (state: RootState) =>
  state.modelingInfo.chartsPoints[chart]
