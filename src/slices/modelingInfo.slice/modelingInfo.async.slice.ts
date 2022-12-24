import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectChartPoints,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
  selectModelingTimer,
} from 'selectors'

export const setModelingGraphicsPoints = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modelingInfo/setGraphicsPoints', (_, { dispatch }) => {
  dispatch(setVelocityGraphicPoints())
  dispatch(setDistanceGraphicPoints())
})

export const setVelocityGraphicPoints = createAsyncThunk<
  ChartPoint[],
  void,
  { state: RootState }
>('modelingInfo/setVelocityGraphicPoints', (_, { getState }) => {
  const points = selectChartPoints('@VelocityChart')(getState())

  const timer = selectModelingTimer(getState())
  const velocity = selectModelingMeteoriteVelocity(getState())

  return getNewPoints(points, { x: timer.ticks, y: velocity })
})

export const setDistanceGraphicPoints = createAsyncThunk<
  ChartPoint[],
  void,
  { state: RootState }
>('modelingInfo/setDistanceGraphicPoints', (_, { getState }) => {
  const points = selectChartPoints('@DistanceChart')(getState())

  const timer = selectModelingTimer(getState())
  const distance = selectModelingMeteoriteDistance(getState())

  return getNewPoints(points, { x: timer.ticks, y: distance })
})

const GRAPHIC_POINTS_AMOUNT = 100

function getNewPoints(oldPoints: ChartPoint[], newPoint: ChartPoint) {
  const newPoints =
    oldPoints.length > GRAPHIC_POINTS_AMOUNT
      ? oldPoints.slice(1, GRAPHIC_POINTS_AMOUNT + 1)
      : [...oldPoints]
  newPoints.push(newPoint)

  return newPoints
}
