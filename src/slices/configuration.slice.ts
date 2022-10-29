import { createSlice } from '@reduxjs/toolkit'
import { defaultPlanet } from 'models'
import { planetModels, setDefinedProperties } from 'utils'

const initialState: ConfigurationSliceState = {
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
