import { TextField } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectPlanetR } from 'selectors'

export const PlanetRField = () => {
  const { control } = useFormContext()
  const R = useSelector(selectPlanetR)

  return (
    <Controller
      name='R'
      control={control}
      defaultValue={R}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label='Радиус планеты'
          error={!!error}
          helperText={error?.message}
          {...field}
        />
      )}
    />
  )
}
