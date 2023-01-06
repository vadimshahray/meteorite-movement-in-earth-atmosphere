import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  selectMeteoriteDistance,
  selectMeteoriteInitialVelocity,
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
  }
})

export const clearModelingData = createAsyncThunk(
  'modeling/clearMeteoriteData',
  () => {},
)
