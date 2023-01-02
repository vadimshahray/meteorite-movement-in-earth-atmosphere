import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectChartLastPoints,
  selectCollisionTime,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
  selectModelingTimer,
} from 'selectors'
import { CALCULATION_INTERVAL_MS } from 'slices/modeling.slice'

const TOTAL_POINTS_AMOUNT = 1000

export const setModelingChartsPoints = createAsyncThunk<
  void,
  boolean,
  { state: RootState; dispatch: AppDispatch }
>(
  'modelingInfo/setGraphicsPoints',
  async (isLastPoint, { getState, dispatch }) => {
    const pointsPassed = getState().modelingInfo.pointsPassed

    await Promise.all([
      dispatch(setVelocityGraphicPoints({ isLastPoint, pointsPassed })),
      dispatch(setDistanceGraphicPoints({ isLastPoint, pointsPassed })),
    ])
  },
)

export const setVelocityGraphicPoints = createAsyncThunk<
  {
    lastPoints: ChartPoint[]
    totalPoint?: ChartPoint
  },
  { isLastPoint: boolean; pointsPassed: number },
  { state: RootState }
>(
  'modelingInfo/setVelocityGraphicPoints',
  ({ isLastPoint, pointsPassed }, { getState }) => {
    const lastPoints = selectChartLastPoints('@VelocityChart')(getState())

    const timer = selectModelingTimer(getState())
    const collisionTime = selectCollisionTime(getState())
    const velocity = selectModelingMeteoriteVelocity(getState())

    const newPoint = { x: timer.ticks / 1000 / 60, y: velocity }

    return {
      lastPoints: getNewLastPoints(lastPoints, newPoint),
      totalPoint:
        canAddTotalPoint(pointsPassed, collisionTime) || isLastPoint
          ? newPoint
          : undefined,
    }
  },
)

export const setDistanceGraphicPoints = createAsyncThunk<
  {
    lastPoints: ChartPoint[]
    totalPoint?: ChartPoint
  },
  { isLastPoint: boolean; pointsPassed: number },
  { state: RootState }
>(
  'modelingInfo/setDistanceGraphicPoints',
  ({ isLastPoint, pointsPassed }, { getState }) => {
    const lastPoints = selectChartLastPoints('@DistanceChart')(getState())

    const timer = selectModelingTimer(getState())
    const collisionTime = selectCollisionTime(getState())
    const distance = selectModelingMeteoriteDistance(getState())

    const newPoint = { x: timer.ticks / 1000 / 60, y: distance / 1000 }

    return {
      lastPoints: getNewLastPoints(lastPoints, newPoint),
      totalPoint:
        canAddTotalPoint(pointsPassed, collisionTime) || isLastPoint
          ? newPoint
          : undefined,
    }
  },
)

export const CHART_LAST_POINTS_AMOUNT = 100

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

function canAddTotalPoint(pointsPassed: number, collisionTime: Timer) {
  skipAmount = Math.floor(
    Math.floor(collisionTime.ticks / CALCULATION_INTERVAL_MS) /
      (TOTAL_POINTS_AMOUNT - totalPointsLength),
  )

  if (pointsPassed % skipAmount === 0 || skipAmount === 0) {
    totalPointsLength++
    return true
  }

  return false
}
