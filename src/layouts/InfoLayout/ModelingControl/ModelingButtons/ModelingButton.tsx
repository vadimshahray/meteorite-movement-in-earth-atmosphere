import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { StartModelingButton } from './StartModelingButton'
import { StopModelingButton } from './StopModelingButton'

export const ModelingButton = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return modelingStatus === 'idle' ? (
    <StartModelingButton />
  ) : (
    <StopModelingButton />
  )
}
