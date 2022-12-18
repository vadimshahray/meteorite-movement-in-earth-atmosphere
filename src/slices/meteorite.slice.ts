import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: MeteoriteSliceState = {
  data: {
    K: 1,
    m: 1,
    R: 1,
    S: 1,
    y0: 1,
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
