import { cancelModeling } from '@slices'
import { createSlice } from '@reduxjs/toolkit'

const initialState: SceneSliceState = {
  activeCamera: '@BackViewCamera',
}

export const sceneSlice = createSlice<SceneSliceState, SceneSlice>({
  name: 'scene',
  initialState,
  reducers: {
    setActiveCamera: (state, { payload }) => {
      state.activeCamera = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cancelModeling.fulfilled, (state) => {
      state.activeCamera = '@BackViewCamera'
    })
  },
})

export const { setActiveCamera } = sceneSlice.actions
