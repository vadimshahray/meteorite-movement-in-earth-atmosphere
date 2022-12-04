import { createSlice } from '@reduxjs/toolkit'
import { meteorite } from 'models'
import { physicalModels, setDefinedProperties } from 'utils'

const initialState: ObjectSliceState = {
  physicalModel: meteorite,
  activePhysicalModel: '@Meteorite',
}

export const objectSlice = createSlice<ObjectSliceState, ObjectSlice>({
  name: 'object',
  initialState,
  reducers: {
    setActivePhysicalModel: (state, { payload }) => {
      state.activePhysicalModel = payload
      state.physicalModel = physicalModels.find((m) => m.key === payload)!.data //TODO: Refactor
    },
    setPhysicalModelData: (state, { payload }) => {
      setDefinedProperties(state.physicalModel, payload)
    },

    setActiveObjectModelData: (state) => {
      state.physicalModel = physicalModels.find(
        (m) => m.key === state.activePhysicalModel, //TODO: Refactor
      )!.data
    },
  },
})

export const {
  setActivePhysicalModel,
  setPhysicalModelData,
  setActiveObjectModelData,
} = objectSlice.actions
