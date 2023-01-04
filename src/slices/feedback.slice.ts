import { createSlice } from '@reduxjs/toolkit'

const initialState: FeedbackSliceState = {
  isControlsDialogVisible: true,
  isMeteoriteCanNotCollideDialogVisible: false,
}

export const feedbackSlice = createSlice<FeedbackSliceState, FeedbackSlice>({
  name: 'feedback',
  initialState,
  reducers: {
    setIsControlsDialogVisible: (state, { payload }) => {
      state.isControlsDialogVisible = payload
    },

    setIsMeteoriteCanNotCollideDialogVisible(state, { payload }) {
      state.isMeteoriteCanNotCollideDialogVisible = payload
    },
  },
})

export const {
  setIsControlsDialogVisible,
  setIsMeteoriteCanNotCollideDialogVisible,
} = feedbackSlice.actions
