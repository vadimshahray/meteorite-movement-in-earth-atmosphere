import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { StopModelingButton } from './StopModelingButton'
import { StartModelingButton } from './StartModelingButton'
import { CancelModelingButton } from './CancelModelingButton'

export const ModelingButtons = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return modelingStatus === 'idle' ? (
    <StartModelingButton />
  ) : (
    <Stack direction='row' spacing={1}>
      {modelingStatus !== 'finished' && <StopModelingButton />}

      <CancelModelingButton />
    </Stack>
  )
}
