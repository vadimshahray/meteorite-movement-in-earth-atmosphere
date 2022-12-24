export const selectModelingStatus = (state: RootState) =>
  state.modeling.modelingStatus

export const selectModelingMeteoriteVelocity = (state: RootState) =>
  state.modeling.meteorite.velocity

export const selectModelingMeteoriteDistance = (state: RootState) =>
  state.modeling.meteorite.distance

export const selectModelingMeteoriteXOffset = (state: RootState) =>
  state.modeling.meteorite.xOffset

export const selectModelingTimer = (state: RootState) => state.modeling.timer
