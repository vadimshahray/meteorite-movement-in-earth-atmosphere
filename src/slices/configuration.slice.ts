import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  isUserSectionInputValid: true,

  interactiveControlsValues: {
    distance: 4 * 1000,
    radius: 1 * 1000,
  },
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
      state.interactiveControlsValues[payload.control] = payload.value
    },
  },
})

export const { setIsUserSectionInputValid, setInteractiveControlValue } =
  configurationSlice.actions
