import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  invalidUserInputCount: 0,

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
    increaseInvalidUserInputCount: (state) => {
      state.invalidUserInputCount++
    },
    decreaseInvalidUserInputCount: (state) => {
      if (state.invalidUserInputCount > 0) {
        state.invalidUserInputCount--
      }
    },

    setInteractiveControlValue: (state, { payload }) => {
      state.interactiveControlsValues[payload.control] = payload.value
    },
  },
})

export const {
  increaseInvalidUserInputCount,
  decreaseInvalidUserInputCount,
  setInteractiveControlValue,
} = configurationSlice.actions
