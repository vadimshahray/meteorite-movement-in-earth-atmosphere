/**
 * Селектор данных физических моделей
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {MeteoriteModel} Данные физических моделей
 */
export const selectMeteoriteData = (state: RootState) => state.meteorite.data

/**
 * Селектор расстояния от поверхности планеты до центра масс объекта
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Расстояние от поверхности планеты до центра масс объекта
 */
export const selectMeteoritey0 = (state: RootState) => state.meteorite.data.y0

/**
 * Селектор массы физической модели
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Масса физической модели
 */
export const selectMeteoritem = (state: RootState) => state.meteorite.data.m

/**
 * Селектор площади поперечного сечения
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Площадь поперечного сечения
 */
export const selectMeteoriteS = (state: RootState) => state.meteorite.data.S

/**
 * Селектор коэффициента лобового сопротивления
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Коэффициент лобового сопротивления
 */
export const selectMeteoriteK = (state: RootState) => state.meteorite.data.K

/**
 * Селектор радиуса физической модели
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {number} Радиус физической модели
 */
export const selectMeteoriteR = (state: RootState) => state.meteorite.data.R
