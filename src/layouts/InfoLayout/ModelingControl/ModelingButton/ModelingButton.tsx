import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'
import { StartModelingButton } from './StartModelingButton'
import { StopModelingButton } from './StopModelingButton'

export const ModelingButton = () => {
  const isModeling = useSelector(selectIsModeling)

  return isModeling ? <StopModelingButton /> : <StartModelingButton />
}
