import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'
import { startModeling, stopModeling } from './modeling.async.slice'

const initialState: ModelingSliceState = {
  isModeling: false,

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
    setModelingMeteoriteData: (state, { payload }) => {
      setDefinedProperties(state.meteorite, payload)
    },

    setTimerData: (state, { payload }) => {
      state.timer = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startModeling.pending, (state) => {
        state.isModeling = true
      })
      .addCase(stopModeling.pending, (state) => {
        state.isModeling = false
      })
  },
})

export const { setModelingMeteoriteData } = modelingSlice.actions
