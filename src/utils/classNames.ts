/**
 * Объединяет массив классов CSS в одну строку
 * @param {string[]} classes Массив имен классов CSS
 * @returns {string} Объединенные в строку имена классов
 */
export const styleClasses = (...classes: (string | undefined)[]) => {
  return classes.join(' ')
}
