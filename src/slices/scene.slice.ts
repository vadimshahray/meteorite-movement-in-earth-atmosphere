import { createSlice } from '@reduxjs/toolkit'

export const sceneSlice = createSlice<SceneSliceState, SceneSlice>({
  name: 'scene',
  initialState: {
    activeCamera: '@BackViewCamera',
  },
  reducers: {
    setActiveCamera: (state, { payload }) => {
      state.activeCamera = payload
    },
  },
  extraReducers: (builder) => {},
})

export const { setActiveCamera } = sceneSlice.actions
