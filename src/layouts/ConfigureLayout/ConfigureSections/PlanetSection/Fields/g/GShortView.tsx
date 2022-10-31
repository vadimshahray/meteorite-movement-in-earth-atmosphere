import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'

export const GShortView = () => {
  const g = useSelector(selectPlanetg)

  return <TextField label='Значение g' value={g} />
}
