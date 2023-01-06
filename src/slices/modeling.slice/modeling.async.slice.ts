import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAngleBetweenTwoVectors, radiansToDegrees } from '@utils'
import {
  selectMeteoriteDistance,
  selectMeteoriteInitialVelocity,
  selectMeteoriteVelocityVector,
} from '@selectors'
import {
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
  return {
    velocity: selectMeteoriteInitialVelocity(getState()),
    distance: selectMeteoriteDistance(getState()),
    localSkylineAngle:
      -1 * getLocalSkylineAngle(selectMeteoriteVelocityVector(getState())),
  }
})

export const clearModelingData = createAsyncThunk(
  'modeling/clearMeteoriteData',
  () => {},
)

function getLocalSkylineAngle(vector: Vector2) {
  const entryAngleInDegrees = radiansToDegrees(
    getAngleBetweenTwoVectors(vector, {
      x: 1,
      y: 0,
    }),
  )

  return 180 - 90 - entryAngleInDegrees
}
