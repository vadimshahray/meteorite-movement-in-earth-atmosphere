import { Canvas } from './Canvas'
import { useSelector } from 'react-redux'
import { FullContainer } from '@components'
import { selectModelingStatus } from '@selectors'
import { ShowControlsDialogButton } from './ShowControlsDialogButton'

/**
 * Блок, содержащий 3D модель
 * @returns {JSX.Element}
 */
export const ModelingLayout = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <FullContainer sx={{ backgroundColor: 'black' }}>
      <Canvas />

      {modelingStatus === 'idle' && <ShowControlsDialogButton />}
    </FullContainer>
  )
}
