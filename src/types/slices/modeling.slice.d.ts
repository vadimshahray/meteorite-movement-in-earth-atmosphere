type ModelingSliceState = {
  modelingStatus: 'idle' | 'processing' | 'stopped' | 'finished'

  meteorite: MeteoriteMovement
  canMeteoriteCollide: boolean

  time: Time
}

/**
 * Слайс, отвечающий за моделирование приложения
 * @interface
 */
interface ModelingSlice extends SliceCaseReducers<ModelingSliceState> {}
