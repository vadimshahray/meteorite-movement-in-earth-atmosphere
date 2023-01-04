export const selectInvalidUserInputCount = (state: RootState) =>
  state.configuration.invalidUserInputCount

export const selectInteractiveControlValue =
  (control: InteractiveControls) => (state: RootState) =>
    state.configuration.interactiveControlsValues[control]

export const selectIsControlsDialogVisible = (state: RootState) =>
  state.configuration.isControlsDialogVisible

export const selectIsMeteoriteCanNotCollideDialogVisible = (state: RootState) =>
  state.configuration.isMeteoriteCanNotCollideDialogVisible
