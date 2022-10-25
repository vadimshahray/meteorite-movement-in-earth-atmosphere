import { TextField } from '@mui/material'
import { Container } from 'components'
import { useSelector } from 'react-redux'
import { selectPlanetgG } from 'selectors'

export const GDetailedView = () => {
  const G = useSelector(selectPlanetgG)

  return (
    <Container disableGuttersH>
      <TextField label='Гравитационная постоянная' value={G.view} disabled />
      <TextField label='Радиус планеты' />
      <TextField label='Масса планеты' />
    </Container>
  )
}
