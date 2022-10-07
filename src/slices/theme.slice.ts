import { createSlice } from '@reduxjs/toolkit'

const initialState: ThemeSliceState = {
  colorMode: 'light',
}

export const themeSlice = createSlice<ThemeSliceState, ThemeSlice>({
  name: 'theme',
  initialState,
  reducers: {
    setColorMode: (state, { payload }) => {
      state.colorMode = payload
    },
  },
})

export const { setColorMode } = themeSlice.actions
