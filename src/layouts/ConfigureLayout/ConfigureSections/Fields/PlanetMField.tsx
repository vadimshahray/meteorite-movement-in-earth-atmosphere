import { TextField } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectPlanetM } from 'selectors'

export const PlanetMField = () => {
  const { control } = useFormContext()
  const M = useSelector(selectPlanetM)

  return (
    <Controller
      name='M'
      control={control}
      defaultValue={M}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label='Масса планеты'
          error={!!error}
          helperText={error?.message}
          {...field}
        />
      )}
    />
  )
}
