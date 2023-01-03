import { setDefinedProperties } from 'utils'
import { createSlice } from '@reduxjs/toolkit'

export const meteoriteSlice = createSlice<MeteoriteSliceState, MeteoriteSlice>({
  name: 'meteorite',
  initialState: {
    mass: 1000,

    radius: 10000,
    distance: 1000000,

    initialVelocity: 10,

    velocityVectorX: 1,
    velocityVectorY: 0,
  },
  reducers: {
    setMeteoriteData: (state, { payload }) => {
      setDefinedProperties(state, payload)
    },
  },
})

export const { setMeteoriteData, changeMeteoriteData } = meteoriteSlice.actions
