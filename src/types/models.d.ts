type Vector3 = {
  x: number
  y: number
  z: number
}

/** Число: {value} * 10^{power} */
type PowerNumber = {
  /** Число x: x * 10^const */
  value: number
  /** Число x: const * 10^x */
  power: number
}

/** (*Частичная модель) Число: {value} * 10^{power} */
type Partial_PowerNumber = {
  /** Число x: x * 10^const */
  value?: number
  /** Число x: const * 10^x */
  power?: number
}

/** Модель данных, имеющих расширенный и краткий варианты задания */
type ExtendedData<ST, DT> = {
  /** Активный вариант */
  active: Exclude<keyof ExtendedData<ST, DT>, 'active'>
  /** Краткий вариант */
  short: ST
  /** Подробный вариант */
  detailed: DT
}

type Partial_ExtendedData<ST, DT> = {
  /** Активный вариант */
  active?: Exclude<keyof ExtendedData<ST, DT>, 'active'>
  /** Краткий вариант */
  short?: ST
  /** Подробный вариант */
  detailed?: DT
}
