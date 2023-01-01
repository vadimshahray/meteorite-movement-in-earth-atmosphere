import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: MeteoriteSliceState = {
  mass: 1000,
  radius: 10000,
  distance: 1000000,
  velocityVectorX: 1,
  velocityVectorY: 0,
  initialVelocity: 10,
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
