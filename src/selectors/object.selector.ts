/**
 * Селектор данных физических моделей
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {PhysicalModel} Данные физических моделей
 */
export const selectObjectModelData = (state: RootState) =>
  state.object.physicalModel

/**
 * Селектор активной физической модели
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {PhysicalModel} Активная физическая модель
 */
export const selectActiveObjectModel = (state: RootState) =>
  state.object.activePhysicalModel

/**
 * Селектор расстояния от поверхности планеты до центра масс объекта
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Расстояние от поверхности планеты до центра масс объекта
 */
export const selectObjectModely0 = (state: RootState) =>
  state.object.physicalModel.y0

/**
 * Селектор массы физической модели
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Масса физической модели
 */
export const selectObjectModelm = (state: RootState) =>
  state.object.physicalModel.m

/**
 * Селектор площади поперечного сечения
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Площадь поперечного сечения
 */
export const selectObjectModelS = (state: RootState) =>
  state.object.physicalModel.S

/**
 * Селектор коэффициента лобового сопротивления
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Коэффициент лобового сопротивления
 */
export const selectObjectModelK = (state: RootState) =>
  state.object.physicalModel.K

/**
 * Селектор радиуса физической модели
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Радиус физической модели
 */
export const selectObjectModelR = (state: RootState) =>
  state.object.physicalModel.R
