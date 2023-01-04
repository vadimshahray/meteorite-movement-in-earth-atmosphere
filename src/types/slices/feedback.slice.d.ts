type FeedbackSliceState = {
  isControlsDialogVisible: boolean
  isMeteoriteCanNotCollideDialogVisible: boolean
}

interface FeedbackSlice extends SliceCaseReducers<FeedbackSliceState> {
  setIsControlsDialogVisible(
    state: FeedbackSliceState,
    action: PayloadAction<boolean>,
  ): void

  setIsMeteoriteCanNotCollideDialogVisible(
    state: FeedbackSliceState,
    action: PayloadAction<boolean>,
  ): void
}
