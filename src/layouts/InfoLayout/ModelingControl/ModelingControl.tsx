import { Container } from 'components'
import { ModelingButton } from './ModelingButton'
import { ModelingTimer } from './ModelingTimer'

export const ModelingControl = () => {
  return (
    <Container>
      <ModelingButton />
      <ModelingTimer />
    </Container>
  )
}
