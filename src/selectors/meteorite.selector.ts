export const selectMeteoriteDistance = (state: RootState) =>
  state.meteorite.data.distance

export const selectMeteoriteMass = (state: RootState) =>
  state.meteorite.data.mass

export const selectMeteoriteRadius = (state: RootState) =>
  state.meteorite.data.radius

export const selectMeteoriteInitialVelocity = (state: RootState) =>
  state.meteorite.data.initialVelocity

export const selectMeteoriteVelocityVectorX = (state: RootState) =>
  state.meteorite.data.velocityVector.x

export const selectMeteoriteVelocityVectorY = (state: RootState) =>
  state.meteorite.data.velocityVector.y

export const selectMeteoriteVelocityVectorZ = (state: RootState) =>
  state.meteorite.data.velocityVector.z
