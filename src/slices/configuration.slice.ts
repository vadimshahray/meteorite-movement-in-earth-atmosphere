import { createSlice } from '@reduxjs/toolkit'
import { setDefinedProperties } from 'utils'

const initialState: ConfigurationSliceState = {
  isUserSectionInputValid: true,

  interactiveControlsValues: {
    distance: 4 * 1000,
    radius: 1 * 1000,
  },

  activeSection: '@Meteorite',
}

export const configurationSlice = createSlice<
  ConfigurationSliceState,
  ConfigurationSlice
>({
  name: 'configuration',
  initialState,
  reducers: {
    setIsUserSectionInputValid: (state, { payload }) => {
      state.isUserSectionInputValid = payload
    },

    setInteractiveControlValue: (state, { payload }) => {
      setDefinedProperties(state.isUserSectionInputValid, payload)
    },

    setActiveSection: (state, { payload }) => {
      state.activeSection = payload
    },
  },
})

export const {
  setIsUserSectionInputValid,
  setInteractiveControlValue,
  setActiveSection,
} = configurationSlice.actions
