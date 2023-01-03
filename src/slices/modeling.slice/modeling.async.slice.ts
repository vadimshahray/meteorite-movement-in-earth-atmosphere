import { ticksToTime } from 'utils'
import { setModelingChartsPoints } from 'slices'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectMeteoriteDistance,
  selectMeteoriteInitialVelocity,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
} from 'selectors'

export const CALCULATION_INTERVAL_MS = 33

export const startModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/start', async (_, { dispatch }) => {
  await dispatch(initializeModelingMeteoriteData())

  await dispatch(
    startModelingTimer(() => {
      dispatch(calculateMeteoriteData())
    }),
  )
})

export const clearModelingData = createAsyncThunk(
  'modeling/clearMeteoriteData',
  () => {},
)

export const initializeModelingMeteoriteData = createAsyncThunk<
  ModelingMeteorite,
  void,
  { state: RootState }
>('modeling/initializeMeteoriteData', (_, { getState }) => {
  return {
    velocity: selectMeteoriteInitialVelocity(getState()),
    distance: selectMeteoriteDistance(getState()),
  }
})

export const stopModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/stop', async (_, { dispatch }) => {
  await dispatch(stopModelingTimer())
})

export const restartModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/restart', async (_, { dispatch }) => {
  await dispatch(
    startModelingTimer(() => {
      dispatch(calculateMeteoriteData())
    }),
  )
})

export const cancelModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/cancel', async (_, { dispatch }) => {
  await dispatch(stopModelingTimer())
  await dispatch(clearModelingData())
})

export const finishModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/finish', async (_, { dispatch }) => {
  await dispatch(stopModelingTimer())
})

const calculateMeteoriteData = createAsyncThunk<
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

let interval: NodeJS.Timer

const startModelingTimer = createAsyncThunk<
  void,
  () => void,
  { state: RootState; dispatch: AppDispatch }
>('modeling/startTimer', (callback, { getState, dispatch }) => {
  let ticks = getState().modeling.time.ticks

  interval = setInterval(() => {
    ticks += CALCULATION_INTERVAL_MS
    dispatch(setModelingTimerTime(ticks))

    callback()
  }, CALCULATION_INTERVAL_MS)
})

const stopModelingTimer = createAsyncThunk('modeling/stopTimer', async () => {
  await clearInterval(interval)
})

export const setModelingTimerTime = createAsyncThunk<Time, number>(
  'modeling/setTimerTime',
  (ticks) => {
    return ticksToTime(ticks)
  },
)
