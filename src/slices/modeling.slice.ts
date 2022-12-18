import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: ModelingSliceState = {
  isModeling: false,
  meteorite: {
    distance: 0,
    velocity: 0,
    xOffset: 0,
  },
}

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState,
  reducers: {
    setIsModeling: (state, { payload }) => {
      state.isModeling = payload
    },

    setMeteoriteData: (state, { payload }) => {
      setDefinedProperties(state.meteorite, payload)
    },
  },
})

export const { setIsModeling, setMeteoriteData } = modelingSlice.actions
