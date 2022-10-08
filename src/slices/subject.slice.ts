import { createSlice } from '@reduxjs/toolkit'

const initialState: SubjectSliceState = {}

export const subjectSlice = createSlice<SubjectSliceState, SubjectSlice>({
  name: 'subject',
  initialState,
  reducers: {},
})
