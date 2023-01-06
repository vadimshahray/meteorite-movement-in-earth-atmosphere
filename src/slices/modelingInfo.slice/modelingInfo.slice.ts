import { ticksToTime } from '@utils'
import { createSlice } from '@reduxjs/toolkit'
import {
  clearModelingData,
  calculateCollisionTime,
  setModelingChartsPoints,
  setDistanceChartPoints,
  setVelocityChartPoints,
  calculateMeteoriteMovement,
  initializeModelingMeteoriteData,
} from '@slices'

const initialState: ModelingInfoSliceState = {
  activeChart: '@VelocityChart',

  pointsPassed: 0,
  chartsPoints: {
    '@VelocityChart': {
      lastPoints: [],
      totalPoints: [],
    },
    '@DistanceChart': {
      lastPoints: [],
      totalPoints: [],
    },
  },

  collisionTime: ticksToTime(0),

  meteoriteVelocity: {
    max: 0,
    average: 0,
  },
}

export const modelingInfoSlice = createSlice<
  ModelingInfoSliceState,
  ModelingInfoSlice
>({
  name: 'modelingInfo',
  initialState,
  reducers: {
    setActiveChart: (state, { payload }) => {
      state.activeChart = payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        initializeModelingMeteoriteData.fulfilled,
        (state, { payload }) => {
          state.meteoriteVelocity.average = payload.velocity
        },
      )

      .addCase(setModelingChartsPoints.fulfilled, (state) => {
        state.pointsPassed++
      })

      .addCase(setVelocityChartPoints.fulfilled, (state, { payload }) => {
        state.chartsPoints['@VelocityChart'].lastPoints = payload.lastPoints

        if (payload.totalPoint) {
          state.chartsPoints['@VelocityChart'].totalPoints.push(
            payload.totalPoint,
          )
        }
      })
      .addCase(setDistanceChartPoints.fulfilled, (state, { payload }) => {
        state.chartsPoints['@DistanceChart'].lastPoints = payload.lastPoints

        if (payload.totalPoint) {
          state.chartsPoints['@DistanceChart'].totalPoints.push(
            payload.totalPoint,
          )
        }
      })

      .addCase(calculateMeteoriteMovement.fulfilled, (state, { payload }) => {
        if (state.meteoriteVelocity.max < payload.velocity) {
          state.meteoriteVelocity.max = payload.velocity
        }

        if (state.pointsPassed) {
          state.meteoriteVelocity.average =
            (state.meteoriteVelocity.average * state.pointsPassed +
              payload.velocity) /
            (state.pointsPassed + 1)
        }
      })

      .addCase(calculateCollisionTime.fulfilled, (state, { payload }) => {
        state.collisionTime = payload
      })

      .addCase(clearModelingData.fulfilled, (state) => {
        state.pointsPassed = initialState.pointsPassed
        state.chartsPoints = initialState.chartsPoints

        state.collisionTime = initialState.collisionTime

        state.meteoriteVelocity = initialState.meteoriteVelocity
      })
  },
})

export const { setActiveChart } = modelingInfoSlice.actions
