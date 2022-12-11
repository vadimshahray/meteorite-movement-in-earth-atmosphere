type SceneSliceState = {
  activeCamera: SceneCameras
}

interface SceneSlice extends SliceCaseReducers<SceneSliceState> {
  setActiveCamera(
    state: SceneSliceState,
    action: PayloadAction<SceneCameras>,
  ): void
}
