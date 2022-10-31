import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'

export const GField = () => {
  const g = useSelector(selectPlanetg)
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name='g'
      defaultValue={g}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label='Значение g'
          {...field}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  )
}
