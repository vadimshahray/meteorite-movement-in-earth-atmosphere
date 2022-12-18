export const selectMeteoriteDistance = (state: RootState) =>
  state.meteorite.data.distance

export const selectMeteoriteMass = (state: RootState) =>
  state.meteorite.data.mass

export const selectMeteoriteS = (state: RootState) => state.meteorite.data.S

export const selectMeteoriteK = (state: RootState) => state.meteorite.data.K

export const selectMeteoriteRadius = (state: RootState) =>
  state.meteorite.data.radius
