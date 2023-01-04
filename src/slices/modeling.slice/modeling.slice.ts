import { ticksToTime } from '@utils'
import { createSlice } from '@reduxjs/toolkit'
import {
  stopModeling,
  startModeling,
  cancelModeling,
  finishModeling,
  restartModeling,
  setModelingTimerTime,
  checkCanMeteoriteCollide,
  calculateMeteoriteDistance,
  calculateMeteoriteVelocity,
  initializeModelingMeteoriteData,
} from '@slices'

const initialState: ModelingSliceState = {
  modelingStatus: 'idle',

  meteorite: {
    distance: 0,
    velocity: 0,
  },
  canMeteoriteCollide: true,

  time: ticksToTime(0),
}

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startModeling.fulfilled, (state) => {
        state.modelingStatus = 'processing'
      })
      .addCase(restartModeling.fulfilled, (state) => {
        state.modelingStatus = 'processing'
      })

      .addCase(stopModeling.fulfilled, (state) => {
        state.modelingStatus = 'stopped'
      })

      .addCase(finishModeling.fulfilled, (state) => {
        state.modelingStatus = 'finished'
      })

      .addCase(cancelModeling.fulfilled, (state) => {
        state.modelingStatus = initialState.modelingStatus

        state.meteorite = initialState.meteorite
        state.canMeteoriteCollide = initialState.canMeteoriteCollide

        state.time = initialState.time
      })

      .addCase(checkCanMeteoriteCollide.fulfilled, (state, { payload }) => {
        state.canMeteoriteCollide = payload
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
