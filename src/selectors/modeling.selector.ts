export const selectModelingStatus = (state: RootState) =>
  state.modeling.modelingStatus

export const selectModelingMeteoriteVelocity = (state: RootState) =>
  state.modeling.meteorite.velocity

export const selectModelingMeteoriteDistance = (state: RootState) =>
  state.modeling.meteorite.distance

export const selectModelingMeteoritePathLength = (state: RootState) =>
  state.modeling.meteorite.pathLength

export const selectModelingMeteoriteLocalSkylineAngle = (state: RootState) =>
  state.modeling.meteorite.localSkylineAngle

export const selectModelingTime = (state: RootState) => state.modeling.time

export const selectCanMeteoriteCollide = (state: RootState) =>
  state.modeling.canMeteoriteCollide
