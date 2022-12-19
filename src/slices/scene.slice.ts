import { createSlice } from '@reduxjs/toolkit'
import { stopModeling } from './modeling.slice'

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
  extraReducers: (builder) => {
    builder.addCase(stopModeling.pending, (state) => {
      state.activeCamera = '@BackViewCamera'
    })
  },
})

export const { setActiveCamera } = sceneSlice.actions
