export const selectModelingStatus = (state: RootState) =>
  state.modeling.modelingStatus

export const selectModelingMeteoriteVelocity = (state: RootState) =>
  state.modeling.meteorite.velocity

export const selectModelingMeteoriteDistance = (state: RootState) =>
  state.modeling.meteorite.distance

export const selectModelingMeteoriteAngle = (state: RootState) =>
  state.modeling.meteorite.angle

export const selectModelingTime = (state: RootState) => state.modeling.time

export const selectCanMeteoriteCollide = (state: RootState) =>
  state.modeling.canMeteoriteCollide
