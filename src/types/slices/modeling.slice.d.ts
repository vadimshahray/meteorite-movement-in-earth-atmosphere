type ModelingSliceState = {
  isModeling: boolean

  meteorite: {
    velocity: number
    distance: number
    xOffset: number
  }
}

/**
 * Слайс, отвечающий за моделирование приложения
 * @interface
 */
interface ModelingSlice extends SliceCaseReducers<ModelingSliceState> {
  setIsModeling(state: ModelingSliceState, action: PayloadAction<boolean>): void

  setModelingMeteoriteData(
    state: ModelingSliceState,
    action: PayloadAction<{
      velocity: number
      distance: number
      xOffset: number
    }>,
  ): void
}
