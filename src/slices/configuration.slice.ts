import { createSlice } from '@reduxjs/toolkit'
import { customPlanet, EarthPlanet } from 'models'

const initialState: ConfigurationSliceState = {
  activeSection: 0,

  planetTemplates: {
    '@custom': {
      name: 'Пользовательская',
      data: customPlanet,
      default: customPlanet,
    },
    '@Earth': {
      name: 'Земля',
      data: EarthPlanet,
      default: EarthPlanet,
    },
  },
  activePlanetTemplate: '@custom',
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
    setActivePlanetTemplate: (state, { payload }) => {
      state.activePlanetTemplate = payload
    },
  },
})

export const { setActiveSection, setActivePlanetTemplate } =
  configurationSlice.actions
