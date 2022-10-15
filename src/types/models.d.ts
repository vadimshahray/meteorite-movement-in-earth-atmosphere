/** Модель данных, имеющих расширенный и краткий варианты задания */
type ExtendedData<ST, DT> = {
  /** Активный вариант */
  active: Exclude<keyof ExtendedData<ST, DT>, 'active'>
  /** Краткий вариант */
  short: ST
  /** Подробный вариант */
  detailed: DT
}

/** Модель неизменяемых данных  */
type ConstData<T> = {
  isConst: boolean
  /** Отображаемый вариант */
  view: string
  /** Значение */
  value: T
}
