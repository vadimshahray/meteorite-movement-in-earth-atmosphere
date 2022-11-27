import { createSlice } from '@reduxjs/toolkit'
import { EarthPlanet } from 'models'
import { planetModels, setDefinedProperties } from 'utils'

const initialState: PlanetSliceState = {
  planet: EarthPlanet,
  planetModels: [
    { key: '@Mercury', name: 'Меркурий' },
    { key: '@Venus', name: 'Венера' },
    { key: '@Earth', name: 'Земля' },
    { key: '@Mars', name: 'Марс' },
    { key: '@Jupiter', name: 'Юпитер' },
    { key: '@Saturn', name: 'Сатурн' },
    { key: '@Uranus', name: 'Уран' },
    { key: '@Neptune', name: 'Нептун' },
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
