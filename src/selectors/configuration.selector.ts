export const selectIsUserSectionInputValid = (state: RootState) =>
  state.configuration.isUserSectionInputValid

export const selectActiveSection = (state: RootState) =>
  state.configuration.activeSection

export const selectInteractiveControlValue =
  (control: keyof InteractiveControls) => (state: RootState) =>
    state.configuration.interactiveControlsValues[control]
