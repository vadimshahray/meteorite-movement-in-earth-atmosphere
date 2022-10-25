import { TextField } from '@mui/material'
import { Container } from 'components'
import { useSelector } from 'react-redux'
import { selectPlanetgG, selectPlanetM, selectPlanetR } from 'selectors'

export const GDetailedView = () => {
  const G = useSelector(selectPlanetgG)
  const M = useSelector(selectPlanetM)
  const R = useSelector(selectPlanetR)

  return (
    <Container disableGuttersH>
      <TextField label='Гравитационная постоянная' value={G.view} disabled />
      <TextField label='Радиус планеты' value={M} />
      <TextField label='Масса планеты' value={R} />
    </Container>
  )
}
