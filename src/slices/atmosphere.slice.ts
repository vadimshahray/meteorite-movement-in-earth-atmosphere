import { createSlice } from '@reduxjs/toolkit'

const initialState: AtmosphereSliceState = {}

export const atmosphereSlice = createSlice<
  AtmosphereSliceState,
  AtmosphereSlice
>({
  name: 'atmosphere',
  initialState,
  reducers: {},
})
