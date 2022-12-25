import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectChartLastPoints,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
  selectModelingTimer,
} from 'selectors'

//TODO: рассчитывать после того как будет готова функция скорости
const TOTAL_POINTS_SKIP = 100

export const setModelingGraphicsPoints = createAsyncThunk<
  void,
  void,
  { state: RootState; dispatch: AppDispatch }
>('modelingInfo/setGraphicsPoints', (_, { getState, dispatch }) => {
  const pointsPassed = getState().modelingInfo.pointsPassed

  dispatch(setVelocityGraphicPoints(pointsPassed))
  dispatch(setDistanceGraphicPoints(pointsPassed))
})

export const setVelocityGraphicPoints = createAsyncThunk<
  {
    lastPoints: ChartPoint[]
    totalPoint?: ChartPoint
  },
  number,
  { state: RootState }
>('modelingInfo/setVelocityGraphicPoints', (pointsPassed, { getState }) => {
  const lastPoints = selectChartLastPoints('@VelocityChart')(getState())

  const timer = selectModelingTimer(getState())
  const velocity = selectModelingMeteoriteVelocity(getState())

  const newPoint = { x: timer.ticks, y: velocity }

  return {
    lastPoints: getNewLastPoints(lastPoints, newPoint),
    totalPoint: pointsPassed % TOTAL_POINTS_SKIP ? undefined : newPoint,
  }
})

export const setDistanceGraphicPoints = createAsyncThunk<
  {
    lastPoints: ChartPoint[]
    totalPoint?: ChartPoint
  },
  number,
  { state: RootState }
>('modelingInfo/setDistanceGraphicPoints', (pointsPassed, { getState }) => {
  const lastPoints = selectChartLastPoints('@DistanceChart')(getState())

  const timer = selectModelingTimer(getState())
  const distance = selectModelingMeteoriteDistance(getState())

  const newPoint = { x: timer.ticks, y: distance }

  return {
    lastPoints: getNewLastPoints(lastPoints, newPoint),
    totalPoint: pointsPassed % TOTAL_POINTS_SKIP ? undefined : newPoint,
  }
})

const GRAPHIC_POINTS_AMOUNT = 100

function getNewLastPoints(oldPoints: ChartPoint[], newPoint: ChartPoint) {
  const newPoints =
    oldPoints.length > GRAPHIC_POINTS_AMOUNT
      ? oldPoints.slice(1, GRAPHIC_POINTS_AMOUNT + 1)
      : [...oldPoints]
  newPoints.push(newPoint)

  return newPoints
}
