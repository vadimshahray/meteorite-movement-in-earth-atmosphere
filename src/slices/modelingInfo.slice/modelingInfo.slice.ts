import { createSlice } from '@reduxjs/toolkit'
import { clearModelingData } from 'slices/modeling.slice'
import {
  setDistanceGraphicPoints,
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
      '@VelocityChart': [],
      '@DistanceChart': [],
    },
  },
  reducers: {
    setActiveChart: (state, { payload }) => {
      state.activeChart = payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(setVelocityGraphicPoints.fulfilled, (state, { payload }) => {
        state.chartsPoints['@VelocityChart'] = payload
      })
      .addCase(setDistanceGraphicPoints.fulfilled, (state, { payload }) => {
        state.chartsPoints['@DistanceChart'] = payload
      })

      .addCase(clearModelingData.fulfilled, (state) => {
        state.chartsPoints = {
          '@VelocityChart': [],
          '@DistanceChart': [],
        }
      })
  },
})

export const { setActiveChart } = modelingInfoSlice.actions
