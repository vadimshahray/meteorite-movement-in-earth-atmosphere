import { createSlice } from '@reduxjs/toolkit'
import { ticksToTimer } from 'utils'
import {
  stopModeling,
  startModeling,
  cancelModeling,
  finishModeling,
  restartModeling,
  setModelingTimerTime,
  calculateMeteoriteDistance,
  calculateMeteoriteVelocity,
  initializeModelingMeteoriteData,
} from './modeling.async.slice'

const initialState: ModelingSliceState = {
  modelingStatus: 'idle',

  meteorite: {
    distance: 0,
    velocity: 0,
  },

  time: ticksToTimer(0),
}

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startModeling.pending, (state) => {
        state.modelingStatus = 'processing'
      })
      .addCase(restartModeling.pending, (state) => {
        state.modelingStatus = 'processing'
      })

      .addCase(stopModeling.pending, (state) => {
        state.modelingStatus = 'stopped'
      })

      .addCase(finishModeling.pending, (state) => {
        state.modelingStatus = 'finished'
      })

      .addCase(cancelModeling.pending, (state) => {
        state.modelingStatus = initialState.modelingStatus

        state.meteorite = initialState.meteorite

        state.time = initialState.time
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

      .addCase(calculateMeteoriteDistance.fulfilled, (state, { payload }) => {
        state.meteorite.distance = payload
      })

      .addCase(setModelingTimerTime.fulfilled, (state, { payload }) => {
        state.time = payload
      })
  },
})
