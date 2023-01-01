import * as yup from 'yup'

export const NumberCommaToDot = (v: any, ov: any) => {
  return typeof ov === 'string' ? Number(ov.replace(',', '.')) : v
}

export const numberRule = (min: number, max: number) => {
  return yup
    .number()
    .transform(NumberCommaToDot)
    .typeError('Не число')
    .min(min, `Значение меньше минимального (${min})`)
    .max(max, `Значение больше максимального (${max})`)
    .required('Обязательно')
}
