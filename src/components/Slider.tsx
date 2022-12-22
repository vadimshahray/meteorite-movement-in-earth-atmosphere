import {
  Box,
  InputLabel,
  OutlinedInput,
  Slider as MUISlider,
} from '@mui/material'
import { useRef, useState } from 'react'
import { Container } from './Container'

export type SliderProps = {
  min: number
  max: number
  step: number
  label: string
  initialValue: number
  onChange: (value: number) => void
}

export const Slider = ({
  label,
  initialValue,
  onChange,
  ...props
}: SliderProps) => {
  const [inputValue, setInputValue] = useState(initialValue.toString())

  const handleChange = (_: any, value: number | number[]) => {
    if (typeof value === 'number') {
      setInputValue(value.toString())
      onChange(value)
    }
  }

  return (
    <Container disableGutters sx={{ marginTop: 1 }}>
      <InputLabel shrink>{label}</InputLabel>

      {/**@ts-ignore */}
      <Box display='flex' alignItems='center' sx={{ marginTop: -1 }}>
        <MUISlider
          {...props}
          defaultValue={initialValue}
          size='small'
          onChange={handleChange}
        />

        <OutlinedInput
          value={inputValue}
          disabled
          sx={{ marginLeft: 1, height: 40 }}
        />
      </Box>
    </Container>
  )
}
