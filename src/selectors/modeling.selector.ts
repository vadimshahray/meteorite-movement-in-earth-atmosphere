export const selectIsModeling = (state: RootState) => state.modeling.isModeling

export const selectModelingMeteoriteVelocity = (state: RootState) =>
  state.modeling.meteorite.velocity

export const selectModelingMeteoriteDistance = (state: RootState) =>
  state.modeling.meteorite.distance

export const selectModelingMeteoriteXOffset = (state: RootState) =>
  state.modeling.meteorite.xOffset

export const selectTimer = (state: RootState) => state.modeling.timer
