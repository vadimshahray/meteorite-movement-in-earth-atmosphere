/**
 * Селектор модификатора цвета темы
 * @param {RootState} state Состояние Redux-хранилища приложения
 * @returns {ColorMode} Модификатор цвета темы
 */
export const selectThemeColorMode = (state: RootState) => state.theme.colorMode
