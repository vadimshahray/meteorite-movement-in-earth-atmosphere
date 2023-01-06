import { h, g0, Rp } from '@constants'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { degreesToRadians, ticksToTime } from '@utils'
import { finishModeling, setModelingChartsPoints } from '@slices'
import {
  selectMeteoriteMass,
  selectMeteoriteRadius,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
  selectModelingMeteoritePathLength,
  selectModelingMeteoriteLocalSkylineAngle,
} from '@selectors'

export const calculateMeteoriteData = createAsyncThunk<
  void,
  void,
  { state: RootState; dispatch: AppDispatch }
>('modeling/calculateMeteoriteData', async (_, { getState, dispatch }) => {
  const distance = getState().modeling.meteorite.distance

  await dispatch(setModelingChartsPoints(distance <= 0))

  if (distance <= 0) {
    await dispatch(finishModeling())
    return
  }

  await dispatch(calculateMeteoriteMovement())
  await dispatch(calculateCollisionTime())
})

export const calculateMeteoriteMovement = createAsyncThunk<
  MeteoriteMovement,
  void,
  { state: RootState }
>('modeling/calculateMeteoriteMovement', async (_, { getState }) => {
  const m = selectMeteoriteMass(getState())
  const r = selectMeteoriteRadius(getState())
  const v = selectModelingMeteoriteVelocity(getState())
  const H = selectModelingMeteoriteDistance(getState())
  const O = selectModelingMeteoriteLocalSkylineAngle(getState())

  const k1 =
    (-h *
      ((Math.PI * r * r) / m / ((g0 * Rp) / (Rp + H))) *
      (1.22 * Math.pow(Math.E, -0.000129 * H)) *
      v *
      v) /
      2 -
    ((g0 * Rp) / (Rp + H)) * sin(O)

  const m1 = h * cos(O) * (v / (Rp + H) - (g0 * Rp) / (Rp + H) / v)

  const l1 = h * v * sin(O)

  const k2 =
    (-h *
      ((Math.PI * r * r) / m / ((g0 * Rp) / (Rp + H + 0.5 * l1))) *
      (1.22 * Math.pow(Math.E, -0.000129 * (H + 0.5 * l1))) *
      (v + 0.5 * k1) *
      (v + 0.5 * k1)) /
      2 -
    ((g0 * Rp) / (Rp + H + 0.5 * l1)) * sin(O + 0.5 * m1)

  const m2 =
    h *
    cos(O + 0.5 * m1) *
    ((v + 0.5 * k1) / (Rp + H + 0.5 * l1) -
      (g0 * Rp) / (Rp + H + 0.5 * l1) / (v + 0.5 * k1))
  const l2 = h * (v + 0.5 * k1) * sin(O + 0.5 * m1)

  const k3 =
    (-h *
      ((Math.PI * r * r) / m / ((g0 * Rp) / (Rp + H + 0.5 * l2))) *
      (1.22 * Math.pow(Math.E, -0.000129 * (H + 0.5 * l2))) *
      (v + 0.5 * k2) *
      (v + 0.5 * k2)) /
      2 -
    ((g0 * Rp) / (Rp + H + 0.5 * l2)) * sin(O + 0.5 * m2)

  const m3 =
    h *
    cos(O + 0.5 * m2) *
    ((v + 0.5 * k2) / (Rp + H + 0.5 * l2) -
      (g0 * Rp) / (Rp + H + 0.5 * l2) / (v + 0.5 * k2))

  const l3 = h * (v + 0.5 * k2) * sin(O + 0.5 * m2)

  const k4 =
    (-h *
      ((Math.PI * r * r) / m / ((g0 * Rp) / (Rp + H + l3))) *
      (1.22 * Math.pow(Math.E, -0.000129 * (H + l3))) *
      (v + k3) *
      (v + k3)) /
      2 -
    ((g0 * Rp) / (Rp + H + l3)) * sin(O + m3)

  const m4 =
    h *
    cos(O + m3) *
    ((v + k3) / (Rp + H + l3) - (g0 * Rp) / (Rp + H + l3) / (v + k3))

  const l4 = h * (v + k3) * sin(O + m3)

  const localSkylineAngle = O + (m1 + 2 * m2 + 2 * m3 + m4) / 6
  const distance = Math.max(H + (l1 + 2 * l2 + 2 * l3 + l4) / 6, 0)

  return {
    distance,
    localSkylineAngle,
    velocity: v + (k1 + 2 * k2 + 2 * k3 + k4) / 6,
    pathLength: distance / Math.sin(degreesToRadians(-localSkylineAngle)),
  }
})

const sin = (n: number) => {
  return Math.sin((n * Math.PI) / 180)
}
const cos = (n: number) => {
  return Math.cos((n * Math.PI) / 180)
}

export const calculateCollisionTime = createAsyncThunk<
  Time,
  void,
  { state: RootState }
>('modeling/calculateCollisionTime', (_, { getState }) => {
  const velocity = selectModelingMeteoriteVelocity(getState())
  const pathLength = selectModelingMeteoritePathLength(getState())

  // Переводим секунды в миллисекунды, потому скорость измеряется в м/с
  return ticksToTime((pathLength / velocity) * 1000)
})
