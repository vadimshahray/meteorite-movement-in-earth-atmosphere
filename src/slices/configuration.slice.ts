import { createSlice } from '@reduxjs/toolkit'

const initialState: ConfigurationSliceState = {
  activeSection: {
    type: 'subject',
    name: '',
  },
}

export const configurationSlice = createSlice<
  ConfigurationSliceState,
  ConfigurationSlice
>({
  name: 'configuration',
  initialState,
  reducers: {
    setActiveSection: (state, { payload }) => {
      state.activeSection = payload
    },
  },
})

export const { setActiveSection } = configurationSlice.actions
