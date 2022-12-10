import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: ObjectSliceState = {
  physicalModel: {
    K: 1,
    m: 1,
    R: 1,
    S: 1,
    y0: 1,
  },
}

export const objectSlice = createSlice<ObjectSliceState, ObjectSlice>({
  name: 'object',
  initialState,
  reducers: {
    setPhysicalModelData: (state, { payload }) => {
      setDefinedProperties(state.physicalModel, payload)
    },
  },
})

export const { setPhysicalModelData } = objectSlice.actions
