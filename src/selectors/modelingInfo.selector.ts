export const selectActiveChart = (state: RootState) =>
  state.modelingInfo.activeChart

export const selectActiveChartLastPoints = (state: RootState) =>
  state.modelingInfo.chartsPoints[selectActiveChart(state)].lastPoints

export const selectActiveChartTotalPoints = (state: RootState) =>
  state.modelingInfo.chartsPoints[selectActiveChart(state)].totalPoints

export const selectChartLastPoints = (chart: Charts) => (state: RootState) =>
  state.modelingInfo.chartsPoints[chart].lastPoints
