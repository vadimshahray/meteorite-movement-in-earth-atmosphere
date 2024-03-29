import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  degreesToRadians,
  radiansToDegrees,
  getAngleBetweenTwoVectors,
} from '@utils'
import {
  selectMeteoriteDistance,
  selectMeteoriteVelocityVector,
  selectMeteoriteInitialVelocity,
} from '@selectors'
import {
  clearCharts,
  stopModelingTimer,
  startModelingTimer,
  checkCanModelingStart,
  calculateMeteoriteData,
} from '@slices'

export const startModeling = createAsyncThunk<
  void,
  boolean | undefined,
  { dispatch: AppDispatch }
>(
  'modeling/start',
  async (skipChecks = false, { dispatch, rejectWithValue }) => {
    if (!skipChecks) {
      const canStart = (await dispatch(checkCanModelingStart())).payload

      if (!canStart) return rejectWithValue(null)
    }

    await dispatch(initializeModelingMeteoriteData())

    await dispatch(
      startModelingTimer(() => {
        dispatch(calculateMeteoriteData())
      }),
    )
  },
)

export const stopModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/stop', async (_, { dispatch }) => {
  await dispatch(stopModelingTimer())
})

export const restartModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/restart', async (_, { dispatch }) => {
  await dispatch(
    startModelingTimer(() => {
      dispatch(calculateMeteoriteData())
    }),
  )
})

export const cancelModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/cancel', async (_, { dispatch }) => {
  await dispatch(stopModelingTimer())
  await dispatch(clearModelingData())
})

export const finishModeling = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/finish', async (_, { dispatch }) => {
  await dispatch(stopModelingTimer())
})

export const initializeModelingMeteoriteData = createAsyncThunk<
  MeteoriteMovement,
  void,
  { state: RootState }
>('modeling/initializeMeteoriteData', (_, { getState }) => {
  const distance = selectMeteoriteDistance(getState())
  const velocity = selectMeteoriteInitialVelocity(getState())

  const entryAngle = getEntryAngle(selectMeteoriteVelocityVector(getState()))
  const localSkylineAngle = -(90 - entryAngle)

  const pathLength = distance / Math.sin(degreesToRadians(-localSkylineAngle))

  return {
    distance,
    velocity,
    pathLength,
    localSkylineAngle,
  }
})

export const clearModelingData = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('modeling/clearMeteoriteData', async (_, { dispatch }) => {
  await dispatch(clearCharts())
})

/**
 * @returns Угол падения в градусах
 */
function getEntryAngle(vector: Vector2) {
  const entryAngleInDegrees = radiansToDegrees(
    getAngleBetweenTwoVectors(vector, {
      x: 1,
      y: 0,
    }),
  )

  return entryAngleInDegrees
}
