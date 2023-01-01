import { Slider, SliderProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Stack } from '@mui/system'
import { useEffect, useState } from 'react'
import { numberRule } from 'utils'
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

export type SliderTextFieldProps = {
  min: number
  max: number
  step: number
  label: string
  adornment?: string
  endIconTooltip?: string
  EndIcon?: Icon
  value: number
  onChange: (value: number) => void
}

export const SliderTextField = ({
  label,
  adornment,
  value,
  onChange,
  EndIcon,
  endIconTooltip,
  min,
  max,
  step,
}: SliderTextFieldProps) => {
  const [fieldValue, setFieldValue] = useState(value.toString())
  const [sliderValue, setSliderValue] = useState(value)

  const onSliderChange = (_: any, sliderValue: number | number[]) => {
    if (typeof sliderValue === 'number') {
      setFieldValue(sliderValue.toString())
      setSliderValue(sliderValue)
      onChange(sliderValue)
    }
  }

  const onTextFieldValid = (textFieldValue: number) => {
    setFieldValue(textFieldValue.toString())
    setSliderValue(textFieldValue)
    onChange(textFieldValue)
  }

  useEffect(() => {
    setFieldValue(value.toString())
    setSliderValue(value)
  }, [value])

  return (
    <Stack>
      <ValidatedTextField
        label={label}
        adornment={adornment}
        value={fieldValue}
        rule={numberRule(min, max)}
        EndIcon={EndIcon}
        endIconTooltip={endIconTooltip}
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
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={onSliderChange}
        />
      </Container>
    </Stack>
  )
}
