import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: MeteoriteSliceState = {
  data: {
    K: 1,
    mass: 1,
    radius: 1,
    S: 1,
    distance: 1,
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
