/**
 * Проверяет, модифицируемое ли свойство у объекта
 * @param {T} obj Целевой объект
 * @param {keyof T} key Свойство целевого объекта
 * @returns {Boolean} Модифицируемое ли свойство
 */
function isWritable<T extends Object>(obj: T, key: keyof T) {
  const desc = Object.getOwnPropertyDescriptor(obj, key) || {}
  return Boolean(desc.writable)
}

/**
 * Переписывает ненулевые модифицируемые значения объекта в другой
 * @param {any} target Объект, в который будут переписываться значения
 * @param {any} source Объект, с которого будут переписываться значения
 */
export const setDefinedProperties = (target: any, source: any) => {
  // Перебираем свойства
  for (const key in source) {
    if (Object.hasOwn(target, key)) {
      // Значение свойства - объект {}
      if (typeof source[key] === 'object' && source[key] !== null) {
        setDefinedProperties(target[key], source[key])
      } else if (
        // Значение в target можно перезаписать
        source[key] !== undefined &&
        source[key] !== null &&
        isWritable(target, key)
      ) {
        target[key] = source[key]
      }
    }
  }
}
