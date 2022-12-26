import { InputAdornment, TextField } from '@mui/material'
import { useDispatch } from 'hooks'
import React, { useEffect, useMemo, useState } from 'react'
import { setIsUserSectionInputValid } from 'slices'
import { object, ValidationError } from 'yup'
import { RequiredNumberSchema } from 'yup/lib/number'
import { AnyObject } from 'yup/lib/types'

/** Пропсы `ValidatedTextField` */
export type ValidatedTextFieldProps = {
  /** Ярлык поля */
  label: string
  value?: string
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
  rule,
  adornment,
  value,
  onValid,
}: ValidatedTextFieldProps) => {
  const dispatch = useDispatch()

  const [fieldValue, setFieldValue] = useState(value)
  const [error, setError] = useState<string>()

  const schema = useMemo(
    () =>
      object({
        value: rule,
      }),
    [rule],
  )

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    schema
      .validate({
        value: newValue,
      })
      .then(({ value }) => {
        onValid(value)
        setError(undefined)
      })
      .catch((error: ValidationError) => {
        setError(error.message)
      })
      .finally(() => {
        setFieldValue(newValue)
      })
  }

  useEffect(() => {
    setFieldValue(value)
    setError(undefined)
  }, [value])

  useEffect(() => {
    dispatch(setIsUserSectionInputValid(!error))
  }, [error, dispatch])

  return (
    <TextField
      value={fieldValue}
      label={label}
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
