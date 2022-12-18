export const selectIsModeling = (state: RootState) => state.modeling.isModeling

export const selectMeteoriteVelocity = (state: RootState) =>
  state.modeling.meteorite.velocity

export const selectMeteoriteDistance = (state: RootState) =>
  state.modeling.meteorite.distance

export const selectMeteoriteXOffset = (state: RootState) =>
  state.modeling.meteorite.xOffset
