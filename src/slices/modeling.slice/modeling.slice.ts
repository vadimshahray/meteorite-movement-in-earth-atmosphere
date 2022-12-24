import { createSlice } from '@reduxjs/toolkit'
import {
  calculateMeteoriteVelocity,
  cancelModeling,
  initializeModelingMeteoriteData,
  startModeling,
  stopModeling,
} from './modeling.async.slice'

const initialState: ModelingSliceState = {
  modelingStatus: 'idle',

  meteorite: {
    distance: 0,
    velocity: 0,
    xOffset: 0,
  },

  timer: {
    hours: 0,
    seconds: 0,
    minutes: 0,
    milliseconds: 0,
    ticks: 0,
  },
}

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState,
  reducers: {
    setTimerData: (state, { payload }) => {
      state.timer = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startModeling.pending, (state) => {
        state.modelingStatus = 'processing'
      })

      .addCase(stopModeling.pending, (state) => {
        state.modelingStatus = 'stopped'
      })

      .addCase(cancelModeling.pending, (state) => {
        state.modelingStatus = 'idle'

        state.timer = initialState.timer
        state.meteorite = initialState.meteorite
      })

      .addCase(
        initializeModelingMeteoriteData.fulfilled,
        (state, { payload }) => {
          state.meteorite = payload
        },
      )

      .addCase(calculateMeteoriteVelocity.fulfilled, (state, { payload }) => {
        state.meteorite.velocity = payload
      })
  },
})

export const { setTimerData } = modelingSlice.actions
