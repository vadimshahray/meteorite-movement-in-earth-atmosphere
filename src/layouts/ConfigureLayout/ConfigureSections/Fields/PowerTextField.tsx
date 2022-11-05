import { ValidatedTextField } from 'components'
import React from 'react'
import { positiveNumberRule } from 'utils'
import { object } from 'yup'

const schema = object({
  power: positiveNumberRule,
})

const extractValueObject = (input: string) => ({
  power: input,
})

export type PowerTextFieldProps = {
  power: number
  onValid: (power: number) => unknown
}

export const PowerTextField = ({ power, onValid }: PowerTextFieldProps) => {
  const handleValid = (data: any) => {
    onValid(data.power as number)
  }

  return (
    <ValidatedTextField
      value={power.toString()}
      label='•10ᕽ'
      schema={schema}
      onValid={handleValid}
      extractValueObject={extractValueObject}
    />
  )
}
