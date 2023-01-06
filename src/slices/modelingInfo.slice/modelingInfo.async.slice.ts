import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  CALCULATION_INTERVAL_MS,
  CHART_LAST_POINTS_AMOUNT,
  CHART_TOTAL_POINTS_AMOUNT,
} from '@constants'
import {
  selectModelingTime,
  selectCollisionTime,
  selectChartLastPoints,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
} from '@selectors'

export const setModelingChartsPoints = createAsyncThunk<
  void,
  boolean,
  { state: RootState; dispatch: AppDispatch }
>(
  'modelingInfo/setChartsPoints',
  async (isLastPoint, { getState, dispatch }) => {
    const pointsPassed = getState().modelingInfo.pointsPassed

    await Promise.all([
      dispatch(setVelocityChartPoints({ isLastPoint, pointsPassed })),
      dispatch(setDistanceChartPoints({ isLastPoint, pointsPassed })),
    ])
  },
)

export const clearCharts = createAsyncThunk('modelingInfo/clearCharts', () => {
  skipAmount = 0
  totalPointsLength = 0
})

export const setVelocityChartPoints = createAsyncThunk<
  ModelingInfoChartNewPoints,
  ModelingInfoChartNewPointInfo,
  { state: RootState }
>(
  'modelingInfo/setVelocityChartPoints',
  ({ isLastPoint, pointsPassed }, { getState }) => {
    const velocity = selectModelingMeteoriteVelocity(getState())

    const lastPoints = selectChartLastPoints('@VelocityChart')(getState())

    return getChartPoints(
      getState(),
      velocity,
      lastPoints,
      isLastPoint,
      pointsPassed,
    )
  },
)

export const setDistanceChartPoints = createAsyncThunk<
  ModelingInfoChartNewPoints,
  ModelingInfoChartNewPointInfo,
  { state: RootState }
>(
  'modelingInfo/setDistanceChartPoints',
  ({ isLastPoint, pointsPassed }, { getState }) => {
    const distance = selectModelingMeteoriteDistance(getState())

    const lastPoints = selectChartLastPoints('@DistanceChart')(getState())

    return getChartPoints(
      getState(),
      distance,
      lastPoints,
      isLastPoint,
      pointsPassed,
    )
  },
)

function getChartPoints(
  state: RootState,
  value: number,
  lastPoints: ChartPoint[],
  isLastPoint: boolean,
  pointsPassed: number,
) {
  const time = selectModelingTime(state)
  const collisionTime = selectCollisionTime(state)

  const newPoint = { x: time.ticks / 1000 / 60, y: value / 1000 }

  return {
    lastPoints: getNewLastPoints(lastPoints, newPoint),
    totalPoint:
      canAddTotalPoint(pointsPassed, collisionTime) || isLastPoint
        ? newPoint
        : undefined,
  }
}

function getNewLastPoints(oldPoints: ChartPoint[], newPoint: ChartPoint) {
  const newPoints =
    oldPoints.length > CHART_LAST_POINTS_AMOUNT
      ? oldPoints.slice(1, CHART_LAST_POINTS_AMOUNT + 1)
      : [...oldPoints]
  newPoints.push(newPoint)

  return newPoints
}

let skipAmount = 0
let totalPointsLength = 0

function canAddTotalPoint(pointsPassed: number, collisionTime: Time) {
  skipAmount = Math.floor(
    Math.floor(collisionTime.ticks / CALCULATION_INTERVAL_MS) /
      (CHART_TOTAL_POINTS_AMOUNT - totalPointsLength),
  )

  if (pointsPassed % skipAmount === 0 || skipAmount === 0) {
    totalPointsLength++
    return true
  }

  return false
}
