import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  invalidUserInputCount: 0,

  interactiveControlsValues: {
    distance: 4 * 1000,
    radius: 1 * 1000,
  },

  isControlsDialogVisible: true,
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

    setIsControlsDialogVisible: (state, { payload }) => {
      state.isControlsDialogVisible = payload
    },
  },
})

export const {
  increaseInvalidUserInputCount,
  decreaseInvalidUserInputCount,
  setInteractiveControlValue,
  setIsControlsDialogVisible,
} = configurationSlice.actions
