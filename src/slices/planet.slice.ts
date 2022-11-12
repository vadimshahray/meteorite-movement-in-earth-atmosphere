import { createSlice } from '@reduxjs/toolkit'
import { defaultPlanet } from 'models'
import { planetModels, setDefinedProperties } from 'utils'

const initialState: PlanetSliceState = {
  planet: defaultPlanet,
  planetModels: [
    { key: '@Earth', name: 'Земля' },
    { key: '@Mars', name: 'Марс' },
  ],
}

export const planetSlice = createSlice<PlanetSliceState, PlanetSlice>({
  name: 'planet',
  initialState,
  reducers: {
    setPlanetModelData: (state, { payload }) => {
      state.planet = planetModels[payload]
    },

    setPlanetData: (state, { payload }) => {
      setDefinedProperties(state.planet, payload)
    },
  },
})

export const { setPlanetModelData, setPlanetData } = planetSlice.actions
