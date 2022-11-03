import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { ValidationError } from 'yup'
import {
  AnyObject,
  AssertsShape,
  ObjectShape,
  OptionalObjectSchema,
  TypeOfShape,
} from 'yup/lib/object'
import { Maybe } from 'yup/lib/types'

/** Пропсы `ValidatedTextField` */
export type ValidatedTextFieldProps<
  TShape extends ObjectShape,
  TContext extends AnyObject = AnyObject,
  TIn extends Maybe<TypeOfShape<TShape>> = TypeOfShape<TShape>,
> = {
  /** Ярлык поля */
  label: string
  /** Значение поля */
  value: string
  /** yup-схема валидации */
  schema: OptionalObjectSchema<TShape, TContext, TIn>
  /**
   * Функция, возвращающая модель валидации, которая используется в `schema`
   * @param {string} input Значение поля, которое нужно вставить в модель валидации
   * @returns {any} Заполненная данными модель валидации
   */
  extractValueObject(input: string): any
  /**
   * Колбэк, вызываемый, когда пользовательский ввод валиден
   * @param {AssertsShape<TShape> | Extract<TIn, null | undefined>} value Валидное значение
   */
  onValid(value: AssertsShape<TShape> | Extract<TIn, null | undefined>): unknown
}

/**
 * Автоматически валидируемое текстовое поле
 * @returns {JSX.Element}
 */
export const ValidatedTextField = <
  TShape extends ObjectShape,
  TContext extends AnyObject = AnyObject,
  TIn extends Maybe<TypeOfShape<TShape>> = TypeOfShape<TShape>,
>({
  label,
  value,
  schema,
  extractValueObject,
  onValid,
}: ValidatedTextFieldProps<TShape, TContext, TIn>) => {
  const [inputValue, setInputValue] = useState(value)
  const [error, setError] = useState<string>()

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    schema
      .validate(extractValueObject(input))
      .then((data) => {
        onValid(data)
        setError(undefined)
      })
      .catch((error: ValidationError) => {
        setError(error.message)
      })
      .finally(() => {
        setInputValue(input)
      })
  }

  return (
    <TextField
      label={label}
      value={inputValue}
      error={!!error}
      helperText={error}
      onChange={handleChange}
    />
  )
}
