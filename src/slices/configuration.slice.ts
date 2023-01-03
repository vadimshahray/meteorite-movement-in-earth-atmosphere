import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  invalidUserInputCount: 0,

  interactiveControlsValues: {
    '@MeteoriteRadiusControl': 5 * 1000,
    '@MeteoriteDistanceControl': 5 * 1000,
    '@MeteoriteVelocityVectorControl': 0.5,
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
      state.interactiveControlsValues[payload.key] = payload.value
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
