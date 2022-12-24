import { Container } from 'components'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { ModelingButtons } from './ModelingButtons'
import { ModelingTimer } from './ModelingTimer'

export const ModelingControl = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <ModelingButtons />

      {modelingStatus !== 'idle' && <ModelingTimer />}
    </Container>
  )
}
