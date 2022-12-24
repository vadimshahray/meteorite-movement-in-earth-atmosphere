type ModelingSliceState = {
  modelingStatus: 'idle' | 'processing' | 'stopped'

  meteorite: {
    velocity: number
    distance: number
    xOffset: number
  }

  timer: Timer
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

  setTimerData(state: ModelingSliceState, action: PayloadAction<Timer>): void
}
