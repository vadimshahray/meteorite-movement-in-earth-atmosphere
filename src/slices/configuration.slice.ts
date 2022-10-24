import { createSlice } from '@reduxjs/toolkit'
import { defaultPlanet } from 'models'
import { planetModels, setDefinedProperties } from 'utils'

const initialState: ConfigurationSliceState = {
  activeSection: 0,

  planet: defaultPlanet,
  planetModels: {
    '@Earth': 'Земля',
    '@Mars': 'Марс',
  },
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
    setPlanetModelData: (state, { payload }) => {
      state.planet = planetModels[payload]
    },
    setDefaultPlanetData: (state) => {
      state.planet = defaultPlanet
    },

    setPlanetg: (state, { payload }) => {
      setDefinedProperties(state.planet.g, payload)
    },
  },
})

export const {
  setActiveSection,
  setPlanetModelData,
  setDefaultPlanetData,
  setPlanetg,
} = configurationSlice.actions
