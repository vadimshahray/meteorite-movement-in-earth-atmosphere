type ModelingSliceState = {
  isModeling: boolean
}

/**
 * Слайс, отвечающий за моделирование приложения
 * @interface
 */
interface ModelingSlice extends SliceCaseReducers<ModelingSliceState> {
  setIsModeling(state: ModelingSliceState, action: PayloadAction<boolean>): void
}
