import { createSlice } from '@reduxjs/toolkit'

const initialState: PlanetSliceState = {}

export const planetSlice = createSlice<PlanetSliceState, PlanetSlice>({
  name: 'planet',
  initialState,
  reducers: {},
})
