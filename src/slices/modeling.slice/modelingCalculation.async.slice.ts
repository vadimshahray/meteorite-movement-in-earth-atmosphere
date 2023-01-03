import { ticksToTime } from 'utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
} from 'selectors'
import {
  finishModeling,
  setModelingChartsPoints,
  CALCULATION_INTERVAL_MS,
} from 'slices'

export const calculateMeteoriteData = createAsyncThunk<
  void,
  void,
  { state: RootState; dispatch: AppDispatch }
>('modeling/calculateMeteoriteData', async (_, { getState, dispatch }) => {
  const distance = getState().modeling.meteorite.distance

  await dispatch(setModelingChartsPoints(distance <= 0))

  if (distance <= 0) {
    await dispatch(finishModeling())
    return
  }

  await dispatch(calculateMeteoriteVelocity())
  await dispatch(calculateMeteoriteDistance())
  await dispatch(calculateCollisionTime())
})

export const calculateMeteoriteVelocity = createAsyncThunk<
  number,
  void,
  { state: RootState }
>('modeling/calculateMeteoriteVelocity', (_, { getState }) => {
  const Vi = selectModelingMeteoriteVelocity(getState())

  return Vi
})

export const calculateMeteoriteDistance = createAsyncThunk<
  number,
  void,
  { state: RootState }
>('modeling/calculateMeteoriteDistance', (_, { getState }) => {
  const velocity = selectModelingMeteoriteVelocity(getState())
  const Dp = selectModelingMeteoriteDistance(getState())

  // Переводим секунды в миллисекунду, потому что скорость измеряется в м/с
  const D = Dp - (velocity * CALCULATION_INTERVAL_MS) / 1000

  return D > 0 ? D : 0
})

export const calculateCollisionTime = createAsyncThunk<
  Time,
  void,
  { state: RootState }
>('modeling/calculateCollisionTime', (_, { getState }) => {
  const velocity = selectModelingMeteoriteVelocity(getState())
  const distance = selectModelingMeteoriteDistance(getState())

  // Переводим секунды в миллисекунды, потому скорость измеряется в м/с
  return ticksToTime((distance / velocity) * 1000)
})
