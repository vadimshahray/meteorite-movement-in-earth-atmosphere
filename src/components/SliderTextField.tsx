import { Slider } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Stack } from '@mui/system'
import { useState } from 'react'
import { positiveNumberRule } from 'utils'
import { Container } from './Container'
import { ValidatedTextField } from './ValidatedTextField'

const StyledSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  '& .MuiSlider-thumb': {
    backgroundColor: theme.palette.primary.light,
  },
  '& .MuiSlider-track': {
    backgroundColor: theme.palette.primary.light,
  },
  '&:hover, &.Mui-focusVisible': {
    '& .MuiSlider-thumb': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .MuiSlider-track': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

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

      <Container
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <StyledSlider
          size='small'
          value={sliderValue}
          onChange={onSliderChange}
          {...sliderProps}
        />
      </Container>
    </Stack>
  )
}
