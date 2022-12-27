import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectMeteoriteDistance,
  selectMeteoriteInitialVelocity,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
} from 'selectors'
import { setModelingChartsPoints } from 'slices/modelingInfo.slice'
import { ticksToTimer } from 'utils'

export const CALCULATION_INTERVAL_MS = 33

export const startModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/start', (_, { dispatch }) => {
  dispatch(clearModelingData())
  dispatch(initializeModelingMeteoriteData())

  dispatch(
    startModelingTimer(() => {
      dispatch(calculateMeteoriteData())
    }),
  )
})

export const clearModelingData = createAsyncThunk(
  'modeling/initializeMeteoriteData',
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
>('modeling/stop', (_, { dispatch }) => {
  dispatch(stopModelingTimer())
})

export const restartModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/restart', (_, { dispatch }) => {
  dispatch(
    startModelingTimer(() => {
      dispatch(calculateMeteoriteData())
    }),
  )
})

export const cancelModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/cancel', (_, { dispatch }) => {
  dispatch(stopModelingTimer())
})

export const finishModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/finish', (_, { dispatch }) => {
  dispatch(stopModelingTimer())
})

const calculateMeteoriteData = createAsyncThunk<
  void,
  void,
  { state: RootState; dispatch: AppDispatch }
>('modeling/calculateMeteoriteData', (_, { getState, dispatch }) => {
  const distance = getState().modeling.meteorite.distance

  if (distance <= 0) {
    dispatch(finishModeling())
    return
  }

  dispatch(calculateMeteoriteVelocity())
  dispatch(calculateMeteoriteDistance())
  dispatch(calculateCollisionTime())

  dispatch(setModelingChartsPoints())
})

export const calculateMeteoriteVelocity = createAsyncThunk<
  number,
  void,
  { state: RootState }
>('modeling/calculateMeteoriteVelocity', (_, { getState }) => {
  const Vi = selectModelingMeteoriteVelocity(getState())

  return Vi + 10
})

export const calculateMeteoriteDistance = createAsyncThunk<
  number,
  void,
  { state: RootState }
>('modeling/calculateMeteoriteDistance', (_, { getState }) => {
  const velocity = selectModelingMeteoriteVelocity(getState())
  const Dp = selectModelingMeteoriteDistance(getState())

  // Переводим секунды в миллисекунду, потому что скорость измеряется в м/с
  return Dp - (velocity * CALCULATION_INTERVAL_MS) / 1000
})

export const calculateCollisionTime = createAsyncThunk<
  Timer,
  void,
  { state: RootState }
>('modeling/calculateCollisionTime', (_, { getState }) => {
  const velocity = selectModelingMeteoriteVelocity(getState())
  const distance = selectModelingMeteoriteDistance(getState())

  // Переводим секунды в миллисекунды, потому скорость измеряется в м/с
  return ticksToTimer((distance / velocity) * 1000)
})

let interval: NodeJS.Timer

const startModelingTimer = createAsyncThunk<
  void,
  () => void,
  { state: RootState; dispatch: AppDispatch }
>('modeling/startTimer', (callback, { getState, dispatch }) => {
  let ticks = getState().modeling.timer.ticks

  interval = setInterval(() => {
    ticks += CALCULATION_INTERVAL_MS
    dispatch(setModelingTimerTime(ticks))

    callback()
  }, CALCULATION_INTERVAL_MS)
})

const stopModelingTimer = createAsyncThunk('modeling/stopTimer', () => {
  clearInterval(interval)
})

export const setModelingTimerTime = createAsyncThunk<Timer, number>(
  'modeling/setTimerTime',
  (ticks) => {
    return ticksToTimer(ticks)
  },
)
