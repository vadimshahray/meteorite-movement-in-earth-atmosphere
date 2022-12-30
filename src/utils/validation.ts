import * as yup from 'yup'

export const NumberCommaToDot = (v: any, ov: any) => {
  return typeof ov === 'string' ? Number(ov.replace(',', '.')) : v
}

export const positiveNumberRule = yup
  .number()
  .transform(NumberCommaToDot)
  .typeError('Не число')
  .positive('Не положительное число')
  .required('Обязательно')

export const numberRule = yup
  .number()
  .transform(NumberCommaToDot)
  .typeError('Не число')
  .required('Обязательно')
