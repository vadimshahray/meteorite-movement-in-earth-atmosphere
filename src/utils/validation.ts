import * as yup from 'yup'

export const isNumberBetweenMinMax = (n: number, min: number, max: number) => {
  return n >= min && n <= max
}

const commaToDot = (v: any, ov: any) => {
  return typeof ov === 'string' ? Number(ov.replace(',', '.')) : v
}

export const numberRule = (min: number, max: number) => {
  return yup
    .number()
    .transform(commaToDot)
    .typeError('Не число')
    .min(min, `Значение меньше минимального (${min})`)
    .max(max, `Значение больше максимального (${max})`)
    .required('Обязательно')
}
