export const selectMeteoriteDistance = (state: RootState) =>
  state.meteorite.distance

export const selectMeteoriteMass = (state: RootState) => state.meteorite.mass

export const selectMeteoriteRadius = (state: RootState) =>
  state.meteorite.radius

export const selectMeteoriteInitialVelocity = (state: RootState) =>
  state.meteorite.initialVelocity

export const selectMeteoriteVelocityVector = (state: RootState): Vector2 => ({
  x: state.meteorite.velocityVectorX,
  y: state.meteorite.velocityVectorY,
})

export const selectMeteoriteVelocityVectorX = (state: RootState) =>
  state.meteorite.velocityVectorX

export const selectMeteoriteVelocityVectorY = (state: RootState) =>
  state.meteorite.velocityVectorY
