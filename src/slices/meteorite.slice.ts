import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: MeteoriteSliceState = {
  data: {
    mass: 1000,
    radius: 10000,
    distance: 1000000,
    angel: 30,
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
  },
})

export const { setMeteoriteData } = meteoriteSlice.actions
