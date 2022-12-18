import { createSlice } from '@reduxjs/toolkit'

export const modelingInfoSlice = createSlice<
  ModelingInfoSliceState,
  ModelingInfoSlice
>({
  name: 'modelingInfo',
  initialState: {
    activeChart: '@VelocityChart',
  },
  reducers: {
    setActiveChart: (state, { payload }) => {
      state.activeChart = payload
    },
  },
})

export const { setActiveChart } = modelingInfoSlice.actions
