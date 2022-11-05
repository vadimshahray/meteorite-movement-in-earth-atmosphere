import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectPlanetgG } from 'selectors'

export const GGField = () => {
  const G = useSelector(selectPlanetgG)

  return <TextField disabled label='Гравитационная постоянная' value={G.view} />
}
