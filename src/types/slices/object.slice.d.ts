/** Состояние слайса физического объекта */
type ObjectSliceState = {
  /** Данные физических моделей */
  physicalModel: PhysicalModel
}

/**
 * Слайс, отвечающий за данные физических моделей
 * @interface
 */
interface ObjectSlice extends SliceCaseReducers<ObjectSliceState> {
  /**
   * Обновляет данные физической модели слайса
   * @param {ObjectSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<Partial_PhysicalModel>} action Данные физической модели
   */
  setPhysicalModelData(
    state: ObjectSliceState,
    action: PayloadAction<Partial_PhysicalModel>,
  ): void
}
