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
  setModelingMeteoriteData(
    state: ModelingSliceState,
    action: PayloadAction<{
      velocity: number
      distance: number
      xOffset: number
    }>,
  ): void
}
