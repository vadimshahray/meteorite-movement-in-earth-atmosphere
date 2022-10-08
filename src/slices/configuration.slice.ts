import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  activeSection: 0,
  planetTemplates: {
    custom: {
      name: 'Пользовательский',
      radius: 0,
    },
    Earth: {
      name: 'Земля',
      radius: 400,
    },
  },
  activePlanetTemplate: 'custom',
}

export const configurationSlice = createSlice<
  ConfigurationSliceState,
  ConfigurationSlice
>({
  name: 'configuration',
  initialState,
  reducers: {
    setActiveSection: (state, { payload }) => {
      state.activeSection = payload
    },
    setPlanetTemplate: (state, { payload }) => {
      state.activePlanetTemplate = payload
    },
  },
})

export const { setActiveSection } = configurationSlice.actions
