import { createSlice } from '@reduxjs/toolkit'
import { defaultPlanet } from 'models'
import { planetModels } from 'utils'

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
  },
})

export const { setActiveSection, setActivePlanetTemplate } =
  configurationSlice.actions
