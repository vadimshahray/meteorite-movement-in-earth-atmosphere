export const selectMeteoriteDistance = (state: RootState) =>
  state.meteorite.distance

export const selectMeteoriteMass = (state: RootState) => state.meteorite.mass

export const selectMeteoriteRadius = (state: RootState) =>
  state.meteorite.radius

export const selectMeteoriteInitialVelocity = (state: RootState) =>
  state.meteorite.initialVelocity

export const selectMeteoriteVelocityVectorX = (state: RootState) =>
  state.meteorite.velocityVector.x

export const selectMeteoriteVelocityVectorY = (state: RootState) =>
  state.meteorite.velocityVector.y

export const selectMeteoriteVelocityVectorZ = (state: RootState) =>
  state.meteorite.velocityVector.z
