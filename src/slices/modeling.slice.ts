import { createSlice } from '@reduxjs/toolkit'

const initialState: ModelingSliceState = {
  isModeling: false,
}

export const modelingSlice = createSlice<ModelingSliceState, ModelingSlice>({
  name: 'modeling',
  initialState,
  reducers: {
    setIsModeling: (state, { payload }) => {
      state.isModeling = payload
    },
  },
})

export const { setIsModeling } = modelingSlice.actions
