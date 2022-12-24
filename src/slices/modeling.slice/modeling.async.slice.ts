import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectMeteoriteDistance,
  selectMeteoriteInitialVelocity,
  selectModelingMeteoriteVelocity,
} from 'selectors'
import { setTimerData } from './modeling.slice'

export const startModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/startModeling', (_, { dispatch }) => {
  dispatch(initializeModelingMeteoriteData())

  dispatch(
    startModelingTimer(() => {
      dispatch(calculateMeteoriteVelocity())
    }),
  )
})

export const initializeModelingMeteoriteData = createAsyncThunk<
  ModelingMeteorite,
  void,
  { state: RootState }
>('modeling/initializeModelingMeteoriteData', (_, { getState }) => {
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
>('modeling/stopModeling', (_, { dispatch }) => {
  dispatch(stopModelingTimer())
})

export const cancelModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/cancelModeling', (_, { dispatch }) => {
  dispatch(stopModelingTimer())
})

export const calculateMeteoriteVelocity = createAsyncThunk<
  number,
  void,
  { state: RootState }
>('modeling/calculateMeteoriteVelocity', (_, { getState }) => {
  const Vi = selectModelingMeteoriteVelocity(getState())

  return Vi + 10
})

const TIMER_INTERVAL = 33
let interval: NodeJS.Timer

const startModelingTimer = createAsyncThunk<
  void,
  () => void,
  { dispatch: AppDispatch }
>('modeling/startTimer', (callback, { dispatch }) => {
  let ticks = 0

  interval = setInterval(() => {
    callback()

    ticks += TIMER_INTERVAL

    const hours = Math.floor(ticks / 1000 / 60 / 60)
    const minutes = Math.floor(ticks / 1000 / 60) % 60
    const seconds = Math.floor(ticks / 1000) % 60
    const milliseconds = ticks % 1000

    dispatch(setTimerData({ hours, minutes, seconds, milliseconds, ticks }))
  }, TIMER_INTERVAL)
})

const stopModelingTimer = createAsyncThunk('modeling/stopTimer', () => {
  clearInterval(interval)
})
