import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  isUserSectionInputValid: true,
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
  },
})

export const { setIsUserSectionInputValid } = configurationSlice.actions
