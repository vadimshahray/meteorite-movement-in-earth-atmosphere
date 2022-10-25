import { TextField } from '@mui/material'
import { Container } from 'components'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'

export const GShortView = () => {
  const g = useSelector(selectPlanetg)

  return (
    <Container disableGuttersH>
      <TextField label='Значение g' value={g} />
    </Container>
  )
}
