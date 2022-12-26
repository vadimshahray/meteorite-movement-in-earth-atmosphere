import { Slider } from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react'
import { positiveNumberRule } from 'utils'
import { Container } from './Container'
import { ValidatedTextField } from './ValidatedTextField'

export type SliderProps = {
  min: number
  max: number
  step: number
  label: string
  adornment?: string
  initialValue: number
  onChange: (value: number) => void
}

export const SliderTextField = ({
  label,
  adornment,
  initialValue,
  onChange,
  ...sliderProps
}: SliderProps) => {
  const [fieldValue, setFieldValue] = useState(initialValue.toString())
  const [sliderValue, setSliderValue] = useState(initialValue)

  const onSliderChange = (_: any, value: number | number[]) => {
    if (typeof value === 'number') {
      setFieldValue(value.toString())
      setSliderValue(value)
      onChange(value)
    }
  }

  const onTextFieldValid = (value: number) => {
    setFieldValue(value.toString())
    setSliderValue(value)
    onChange(value)
  }

  return (
    <Stack>
      <ValidatedTextField
        label={label}
        adornment={adornment}
        value={fieldValue}
        rule={positiveNumberRule}
        onValid={onTextFieldValid}
      />

      <Container sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Slider
          size='small'
          value={sliderValue}
          onChange={onSliderChange}
          {...sliderProps}
        />
      </Container>
    </Stack>
  )
}
