type ModelingSliceState = {
  modelingStatus: 'idle' | 'processing' | 'stopped' | 'finished'

  meteorite: ModelingMeteorite

  timer: Timer
}

/**
 * Слайс, отвечающий за моделирование приложения
 * @interface
 */
interface ModelingSlice extends SliceCaseReducers<ModelingSliceState> {
  setTimerData(state: ModelingSliceState, action: PayloadAction<Timer>): void
}
