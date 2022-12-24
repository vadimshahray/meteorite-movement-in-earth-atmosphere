import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectMeteoriteDistance,
  selectMeteoriteInitialVelocity,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
  selectModelingMeteoriteXOffset,
} from 'selectors'
import { setTimerData } from './modeling.slice'

export const startModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/start', (_, { dispatch }) => {
  dispatch(initializeModelingMeteoriteData())

  dispatch(
    startModelingTimer(() => {
      dispatch(calculateMeteoriteData())
    }),
  )
})

export const initializeModelingMeteoriteData = createAsyncThunk<
  ModelingMeteorite,
  void,
  { state: RootState }
>('modeling/initializeMeteoriteData', (_, { getState }) => {
  return {
    velocity: selectMeteoriteInitialVelocity(getState()),
    distance: selectMeteoriteDistance(getState()),
    xOffset: 0,
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
  dispatch(calculateMeteoriteXOffset())
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
  const Di = selectModelingMeteoriteDistance(getState())

  return Di - 10
})

export const calculateMeteoriteXOffset = createAsyncThunk<
  number,
  void,
  { state: RootState }
>('modeling/calculateMeteoriteXOffset', (_, { getState }) => {
  const offsetI = selectModelingMeteoriteXOffset(getState())

  return offsetI + 1
})

const TIMER_INTERVAL = 33
let interval: NodeJS.Timer

const startModelingTimer = createAsyncThunk<
  void,
  () => void,
  { state: RootState; dispatch: AppDispatch }
>('modeling/startTimer', (callback, { getState, dispatch }) => {
  let ticks = getState().modeling.timer.ticks

  interval = setInterval(() => {
    callback()

    ticks += TIMER_INTERVAL
    dispatch(setModelingTimerTime(ticks))
  }, TIMER_INTERVAL)
})

const stopModelingTimer = createAsyncThunk('modeling/stopTimer', () => {
  clearInterval(interval)
})

export const setModelingTimerTime = createAsyncThunk<Timer, number>(
  'modeling/setTimerTime',
  (ticks) => {
    return {
      hours: Math.floor(ticks / 1000 / 60 / 60),
      minutes: Math.floor(ticks / 1000 / 60) % 60,
      seconds: Math.floor(ticks / 1000) % 60,
      milliseconds: ticks % 1000,
      ticks,
    }
  },
)
