/** Состояние слайса физического объекта */
type ObjectSliceState = {
  /** Данные физических моделей */
  physicalModel: PhysicalModel
  /** Активная физическая модель */
  activePhysicalModel: PhysicalModels
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

  /**
   * Устанавливает данные переданной модели в слайс, помечает переданную модель как "активную".
   * @param {ObjectSliceState} state Внутреннее состояние слайса
   * @param {PayloadAction<PhysicalModels>} action Название модели
   */
  setActivePhysicalModel(
    state: ObjectSliceState,
    action: PayloadAction<PhysicalModels>,
  ): void

  setActiveModelData(state: ObjectSliceState): void
}
