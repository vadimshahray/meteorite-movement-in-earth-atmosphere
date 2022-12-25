import { createSlice } from '@reduxjs/toolkit'
import { clearModelingData } from 'slices/modeling.slice'
import {
  setDistanceGraphicPoints,
  setModelingGraphicsPoints as setModelingChartsPoints,
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
  },
  reducers: {
    setActiveChart: (state, { payload }) => {
      state.activeChart = payload
    },
  },

  extraReducers: (builder) => {
    builder
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
      })
  },
})

export const { setActiveChart } = modelingInfoSlice.actions
