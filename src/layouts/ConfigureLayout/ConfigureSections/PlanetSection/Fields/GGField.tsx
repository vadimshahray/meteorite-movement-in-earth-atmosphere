import { TextField } from '@mui/material'
import { NumberFieldGroup } from 'components'
import { useSelector } from 'react-redux'
import { selectPlanetgG } from 'selectors'

export const GGField = () => {
  const G = useSelector(selectPlanetgG)

  return (
    <NumberFieldGroup>
      <TextField
        disabled
        label='Гравитационная постоянная, м³·кг⁻¹·с⁻²'
        value={G.view}
      />
    </NumberFieldGroup>
  )
}
