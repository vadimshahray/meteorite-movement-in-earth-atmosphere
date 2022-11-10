import { createSlice } from '@reduxjs/toolkit'
import { defaultPlanet } from 'models'
import { planetModels, setDefinedProperties } from 'utils'

const initialState: ConfigurationSliceState = {
  planet: defaultPlanet,
  planetModels: [
    { key: '@Earth', name: 'Земля' },
    { key: '@Mars', name: 'Марс' },
  ],
  isUserSectionInputValid: true,
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

    setPlanetData: (state, { payload }) => {
      setDefinedProperties(state.planet, payload)
    },

    setIsUserSectionInputValid: (state, { payload }) => {
      state.isUserSectionInputValid = payload
    },
  },
})

export const { setPlanetModelData, setPlanetData, setIsUserSectionInputValid } =
  configurationSlice.actions
