export const selectMeteoriteDistance = (state: RootState) =>
  state.meteorite.data.distance

export const selectMeteoriteMass = (state: RootState) =>
  state.meteorite.data.mass

export const selectMeteoriteRadius = (state: RootState) =>
  state.meteorite.data.radius

export const selectMeteoriteAngle = (state: RootState) =>
  state.meteorite.data.angel

export const selectMeteoriteInitialVelocity = (state: RootState) =>
  state.meteorite.data.initialVelocity
