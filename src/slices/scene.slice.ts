import { createSlice } from '@reduxjs/toolkit'
import { cancelModeling } from './modeling.slice'

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
    builder.addCase(cancelModeling.pending, (state) => {
      state.activeCamera = '@BackViewCamera'
    })
  },
})

export const { setActiveCamera } = sceneSlice.actions
