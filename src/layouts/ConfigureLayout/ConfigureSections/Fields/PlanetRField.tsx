import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectPlanetR } from 'selectors'

export const PlanetRField = () => {
  const R = useSelector(selectPlanetR)

  return <TextField label='Радиус планеты' />
}
