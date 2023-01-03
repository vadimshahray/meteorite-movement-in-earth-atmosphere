import { Stack } from '@mui/material'
import { Container } from 'components'
import { useSelector } from 'react-redux'
import { ModelingTimer } from './ModelingTimer'
import { selectModelingStatus } from 'selectors'
import { ModelingButtons } from './ModelingButtons'

export const ModelingControl = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <Container>
      <Stack direction='row' justifyContent='space-between'>
        <ModelingButtons />

        {modelingStatus !== 'idle' && <ModelingTimer />}
      </Stack>
    </Container>
  )
}
