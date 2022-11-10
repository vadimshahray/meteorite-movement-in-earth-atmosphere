import { TextField } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { AnySchema, object, ValidationError } from 'yup'
import { RequiredNumberSchema } from 'yup/lib/number'
import { AnyObject } from 'yup/lib/types'

/** Пропсы `ValidatedTextField` */
export type ValidatedTextFieldProps = {
  /** Ярлык поля */
  label: string
  /** Значение поля */
  value: string
  /** Числовое правило валидации */
  rule: RequiredNumberSchema<number | undefined, AnyObject>
  /**
   * Колбэк, вызываемый, когда пользовательский ввод валиден
   * @param {number} value Валидное значение
   */
  onValid(value: number): unknown
}

/**
 * Автоматически валидируемое текстовое поле
 * @returns {JSX.Element}
 */
export const ValidatedTextField = ({
  label,
  value,
  rule,
  onValid,
}: ValidatedTextFieldProps) => {
  const [inputValue, setInputValue] = useState(value)
  const [error, setError] = useState<string>()

  const schema = useMemo(
    () =>
      object({
        value: rule,
      }),
    [rule],
  )

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    schema
      .validate({
        value: input,
      })
      .then(({ value }) => {
        onValid(value)
        setError(undefined)
      })
      .catch((error: ValidationError) => {
        setError(error.message)
      })
      .finally(() => {
        setInputValue(input)
      })
  }

  useEffect(() => {
    setInputValue(value)
    setError(undefined)
  }, [value])

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
