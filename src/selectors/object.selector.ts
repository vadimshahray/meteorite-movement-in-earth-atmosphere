/**
 * Селектор данных физических моделей
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {PhysicalModel} Данные физических моделей
 */
export const selectObjectModelData = (state: RootState) =>
  state.object.physicalModel
