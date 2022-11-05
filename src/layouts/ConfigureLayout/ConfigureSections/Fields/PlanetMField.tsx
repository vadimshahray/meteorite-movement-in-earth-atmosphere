import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectPlanetM } from 'selectors'

export const PlanetMField = () => {
  const M = useSelector(selectPlanetM)

  return <TextField label='Масса планеты' />
}
