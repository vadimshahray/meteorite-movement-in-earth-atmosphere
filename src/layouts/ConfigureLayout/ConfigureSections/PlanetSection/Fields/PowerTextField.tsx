import { ValidatedTextField } from 'components'
import React from 'react'
import { positiveNumberRule } from 'utils'

export type PowerTextFieldProps = {
  power: number
  onValid: (power: number) => unknown
}

export const PowerTextField = ({ power, onValid }: PowerTextFieldProps) => {
  const handleValid = (value: number) => {
    onValid(value)
  }

  return (
    <ValidatedTextField
      value={power.toString()}
      label='•10ᕽ'
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
