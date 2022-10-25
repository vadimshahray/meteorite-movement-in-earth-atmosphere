import { TextField } from '@mui/material'
import { Container } from 'components'

export const GDetailedView = () => {
  return (
    <Container disableGutters>
      <TextField label='Гравитационная постоянная' disabled />
      <TextField label='Радиус планеты' disabled />
      <TextField label='Масса планеты' disabled />
    </Container>
  )
}
