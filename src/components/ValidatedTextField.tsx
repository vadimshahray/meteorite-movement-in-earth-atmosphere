import { InputAdornment, TextField } from '@mui/material'
import { useDispatch } from 'hooks'
import React, { useEffect, useMemo, useState } from 'react'
import { setIsUserSectionInputValid } from 'slices'
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

  /** Приписка к полю с левой стороны */
  adornment?: string
}

/**
 * Автоматически валидируемое текстовое поле
 * @returns {JSX.Element}
 */
export const ValidatedTextField = ({
  label,
  value,
  rule,
  adornment,
  onValid,
}: ValidatedTextFieldProps) => {
  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch(setIsUserSectionInputValid(!error))
  }, [error, dispatch])

  return (
    <TextField
      label={label}
      value={inputValue}
      error={!!error}
      helperText={error}
      onChange={handleChange}
      InputProps={{
        startAdornment: adornment && (
          <InputAdornment position='start'>{adornment}</InputAdornment>
        ),
      }}
    />
  )
}
