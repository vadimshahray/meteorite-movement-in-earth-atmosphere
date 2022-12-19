import { createAsyncThunk } from '@reduxjs/toolkit'

export const startModeling = createAsyncThunk(
  'modeling/startModeling',
  () => {},
)

export const stopModeling = createAsyncThunk('modeling/stopModeling', () => {})
