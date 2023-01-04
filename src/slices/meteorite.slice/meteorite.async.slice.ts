import { createAsyncThunk } from '@reduxjs/toolkit'
import { setMeteoriteData, checkCanMeteoriteCollide } from '@slices'

export const setMeteoriteVelocityVector = createAsyncThunk<
  void,
  Partial<Vector2>,
  { dispatch: AppDispatch }
>('meteorite/setVelocityVector', async ({ x, y }, { dispatch }) => {
  await dispatch(setMeteoriteData({ velocityVectorX: x, velocityVectorY: y }))

  await dispatch(checkCanMeteoriteCollide())
})
