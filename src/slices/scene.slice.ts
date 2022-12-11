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
})

export const { setActiveCamera } = sceneSlice.actions
