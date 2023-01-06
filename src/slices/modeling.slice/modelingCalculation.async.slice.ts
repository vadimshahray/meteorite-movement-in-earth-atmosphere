import { ticksToTime } from '@utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CALCULATION_INTERVAL_MS } from '@constants'
import { finishModeling, setModelingChartsPoints } from '@slices'
import {
  selectMeteoriteMass,
  selectMeteoriteRadius,
  selectModelingMeteoriteDistance,
  selectModelingMeteoriteVelocity,
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

let O = -10

export const calculateMeteoriteMovement = createAsyncThunk<
  number,
  void,
  { state: RootState }
>('modeling/calculateMeteoriteMovement', async (_, { getState }) => {
  let m = selectMeteoriteMass(getState()),
    v = selectModelingMeteoriteVelocity(getState()),
    H = selectModelingMeteoriteDistance(getState()),
    r = selectMeteoriteRadius(getState()),
    h = CALCULATION_INTERVAL_MS,
    k1 = 0,
    k2 = 0,
    k3 = 0,
    k4 = 0,
    m1 = 0,
    m2 = 0,
    m3 = 0,
    m4 = 0,
    l1 = 0,
    l2 = 0,
    l3 = 0,
    l4 = 0,
    Rp = 6371000,
    g0 = 9.8

  k1 =
    (-h *
      ((Math.PI * r * r) / m / ((g0 * Rp) / (Rp + H))) *
      (1.22 * Math.pow(Math.E, -0.000129 * H)) *
      v *
      v) /
      2 -
    ((g0 * Rp) / (Rp + H)) * sin(O)
  m1 = h * cos(O) * (v / (Rp + H) - (g0 * Rp) / (Rp + H) / v)
  l1 = h * v * sin(O)

  k2 =
    (-h *
      ((Math.PI * r * r) / m / ((g0 * Rp) / (Rp + H + 0.5 * l1))) *
      (1.22 * Math.pow(Math.E, -0.000129 * (H + 0.5 * l1))) *
      (v + 0.5 * k1) *
      (v + 0.5 * k1)) /
      2 -
    ((g0 * Rp) / (Rp + H + 0.5 * l1)) * sin(O + 0.5 * m1)
  m2 =
    h *
    cos(O + 0.5 * m1) *
    ((v + 0.5 * k1) / (Rp + H + 0.5 * l1) -
      (g0 * Rp) / (Rp + H + 0.5 * l1) / (v + 0.5 * k1))
  l2 = h * (v + 0.5 * k1) * sin(O + 0.5 * m1)

  k3 =
    (-h *
      ((Math.PI * r * r) / m / ((g0 * Rp) / (Rp + H + 0.5 * l2))) *
      (1.22 * Math.pow(Math.E, -0.000129 * (H + 0.5 * l2))) *
      (v + 0.5 * k2) *
      (v + 0.5 * k2)) /
      2 -
    ((g0 * Rp) / (Rp + H + 0.5 * l2)) * sin(O + 0.5 * m2)
  m3 =
    h *
    cos(O + 0.5 * m2) *
    ((v + 0.5 * k2) / (Rp + H + 0.5 * l2) -
      (g0 * Rp) / (Rp + H + 0.5 * l2) / (v + 0.5 * k2))
  l3 = h * (v + 0.5 * k2) * sin(O + 0.5 * m2)

  k4 =
    (-h *
      ((Math.PI * r * r) / m / ((g0 * Rp) / (Rp + H + l3))) *
      (1.22 * Math.pow(Math.E, -0.000129 * (H + l3))) *
      (v + k3) *
      (v + k3)) /
      2 -
    ((g0 * Rp) / (Rp + H + l3)) * sin(O + m3)
  m4 =
    h *
    cos(O + m3) *
    ((v + k3) / (Rp + H + l3) - (g0 * Rp) / (Rp + H + l3) / (v + k3))
  l4 = h * (v + k3) * sin(O + m3)

  v = v + (k1 + 2 * k2 + 2 * k3 + k4) / 6
  O = O + (m1 + 2 * m2 + 2 * m3 + m4) / 6
  H = H + (l1 + 2 * l2 + 2 * l3 + l4) / 6

  return v
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
  const distance = selectModelingMeteoriteDistance(getState())

  // Переводим секунды в миллисекунды, потому скорость измеряется в м/с
  return ticksToTime((distance / velocity) * 1000)
})
