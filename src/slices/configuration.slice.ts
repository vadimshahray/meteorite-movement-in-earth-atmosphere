import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  isUserSectionInputValid: true,
  activeSection: '@Object',
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

    setActiveSection: (state, { payload }) => {
      state.activeSection = payload
    },
  },
})

export const { setIsUserSectionInputValid, setActiveSection } =
  configurationSlice.actions
