import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  invalidUserInputCount: 0,

  isControlsDialogVisible: true,
  isMeteoriteCanNotCollideDialogVisible: true,

  interactiveControlsValues: {
    '@MeteoriteRadiusControl': 5 * 1000,
    '@MeteoriteDistanceControl': 5 * 1000,
    '@MeteoriteVelocityVectorControl': 0.5,
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
      state.interactiveControlsValues[payload.key] = payload.value
    },

    setIsControlsDialogVisible: (state, { payload }) => {
      state.isControlsDialogVisible = payload
    },

    setIsMeteoriteCanNotCollideDialogVisible(state, { payload }) {
      state.isMeteoriteCanNotCollideDialogVisible = payload
    },
  },
})

export const {
  setInteractiveControlValue,
  setIsControlsDialogVisible,
  increaseInvalidUserInputCount,
  decreaseInvalidUserInputCount,
  setIsMeteoriteCanNotCollideDialogVisible,
} = configurationSlice.actions
