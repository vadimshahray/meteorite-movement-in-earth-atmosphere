import { setDefinedProperties } from 'utils'
import { createSlice } from '@reduxjs/toolkit'

const initialState: MeteoriteSliceState = {
  mass: 1000,

  radius: 10000,
  distance: 1000000,

  initialVelocity: 10,

  velocityVectorX: 1,
  velocityVectorY: 0,
}

export const meteoriteSlice = createSlice<MeteoriteSliceState, MeteoriteSlice>({
  name: 'meteorite',
  initialState,
  reducers: {
    setMeteoriteData: (state, { payload }) => {
      setDefinedProperties(state, payload)
    },
  },
})

export const { setMeteoriteData, changeMeteoriteData } = meteoriteSlice.actions
