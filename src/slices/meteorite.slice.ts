import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: MeteoriteSliceState = {
  mass: 1000,
  radius: 10000,
  distance: 1000000,
  velocityVectorX: 0,
  velocityVectorY: 0,
  velocityVectorZ: 0,
  initialVelocity: 10,
}

export const meteoriteSlice = createSlice<MeteoriteSliceState, MeteoriteSlice>({
  name: 'meteorite',
  initialState,
  reducers: {
    setMeteoriteData: (state, { payload }) => {
      setDefinedProperties(state, payload)
    },

    changeMeteoriteData: (state, { payload }) => {
      state[payload.property] += payload.value
    },
  },
})

export const { setMeteoriteData, changeMeteoriteData } = meteoriteSlice.actions
