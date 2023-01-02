import { createSlice } from '@reduxjs/toolkit'
import {
  calculateCollisionTime,
  calculateMeteoriteVelocity,
  clearModelingData,
  initializeModelingMeteoriteData,
} from 'slices/modeling.slice'
import { ticksToTimer } from 'utils'
import {
  setDistanceGraphicPoints,
  setModelingChartsPoints,
  setVelocityGraphicPoints,
} from './modelingInfo.async.slice'

export const modelingInfoSlice = createSlice<
  ModelingInfoSliceState,
  ModelingInfoSlice
>({
  name: 'modelingInfo',
  initialState: {
    activeChart: '@VelocityChart',

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

    pointsPassed: 0,

    meteoriteVelocity: {
      max: 0,
      average: 0,
    },

    collisionTime: ticksToTimer(0),
  },
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

      .addCase(setVelocityGraphicPoints.fulfilled, (state, { payload }) => {
        state.chartsPoints['@VelocityChart'].lastPoints = payload.lastPoints

        if (payload.totalPoint) {
          state.chartsPoints['@VelocityChart'].totalPoints.push(
            payload.totalPoint,
          )
        }
      })
      .addCase(setDistanceGraphicPoints.fulfilled, (state, { payload }) => {
        state.chartsPoints['@DistanceChart'].lastPoints = payload.lastPoints

        if (payload.totalPoint) {
          state.chartsPoints['@DistanceChart'].totalPoints.push(
            payload.totalPoint,
          )
        }
      })

      .addCase(calculateMeteoriteVelocity.fulfilled, (state, { payload }) => {
        if (state.meteoriteVelocity.max < payload) {
          state.meteoriteVelocity.max = payload
        }

        if (state.pointsPassed) {
          state.meteoriteVelocity.average =
            (state.meteoriteVelocity.average * state.pointsPassed + payload) /
            (state.pointsPassed + 1)
        }
      })

      .addCase(calculateCollisionTime.fulfilled, (state, { payload }) => {
        state.collisionTime = payload
      })

      .addCase(clearModelingData.fulfilled, (state) => {
        state.chartsPoints = {
          '@VelocityChart': {
            lastPoints: [],
            totalPoints: [],
          },
          '@DistanceChart': {
            lastPoints: [],
            totalPoints: [],
          },
        }

        state.pointsPassed = 0

        state.meteoriteVelocity = {
          max: 0,
          average: 0,
        }

        state.collisionTime = ticksToTimer(0)
      })
  },
})

export const { setActiveChart } = modelingInfoSlice.actions
