import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectChartLastPoints,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
  selectModelingTimer,
} from 'selectors'

//TODO: рассчитывать после того как будет готова функция скорости
const TOTAL_POINTS_SKIP = 100

export const setModelingChartsPoints = createAsyncThunk<
  void,
  boolean,
  { state: RootState; dispatch: AppDispatch }
>('modelingInfo/setGraphicsPoints', (isLastPoint, { getState, dispatch }) => {
  const pointsPassed = getState().modelingInfo.pointsPassed

  dispatch(setVelocityGraphicPoints({ isLastPoint, pointsPassed }))
  dispatch(setDistanceGraphicPoints({ isLastPoint, pointsPassed }))
})

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
    const velocity = selectModelingMeteoriteVelocity(getState())

    const newPoint = { x: timer.ticks / 1000 / 60, y: velocity }

    return {
      lastPoints: getNewLastPoints(lastPoints, newPoint),
      totalPoint:
        pointsPassed % TOTAL_POINTS_SKIP && !isLastPoint ? undefined : newPoint,
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
    const distance = selectModelingMeteoriteDistance(getState())

    const newPoint = { x: timer.ticks / 1000 / 60, y: distance / 1000 }

    return {
      lastPoints: getNewLastPoints(lastPoints, newPoint),
      totalPoint:
        pointsPassed % TOTAL_POINTS_SKIP && !isLastPoint ? undefined : newPoint,
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
