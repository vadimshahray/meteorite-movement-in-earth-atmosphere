export const selectInvalidUserInputCount = (state: RootState) =>
  state.configuration.invalidUserInputCount

export const selectInteractiveControlValue =
  (control: InteractiveControls) => (state: RootState) =>
    state.configuration.interactiveControlsValues[control]
