import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: MeteoriteSliceState = {
  data: {
    mass: 1000,
    radius: 10000,
    distance: 1000000,
    velocityVector: {
      x: 0,
      y: 0,
      z: 0,
    },
    initialVelocity: 10,
  },
}

export const meteoriteSlice = createSlice<MeteoriteSliceState, MeteoriteSlice>({
  name: 'meteorite',
  initialState,
  reducers: {
    setMeteoriteData: (state, { payload }) => {
      setDefinedProperties(state.data, payload)
    },

    changeMeteoriteDistance: (state, { payload }) => {
      state.data.distance += payload
    },
  },
})

export const { setMeteoriteData, changeMeteoriteDistance } =
  meteoriteSlice.actions
