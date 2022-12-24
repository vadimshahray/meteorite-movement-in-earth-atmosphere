import { Container } from 'components'
import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'
import { ModelingButton } from './ModelingButton'
import { ModelingTimer } from './ModelingTimer'

export const ModelingControl = () => {
  const isModeling = useSelector(selectIsModeling)

  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <ModelingButton />

      {isModeling && <ModelingTimer />}
    </Container>
  )
}
