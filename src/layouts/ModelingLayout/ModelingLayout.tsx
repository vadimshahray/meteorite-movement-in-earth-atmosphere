import { Canvas } from './Canvas'
import { styleClasses } from 'utils'
import { useSelector } from 'react-redux'
import { FullContainer } from 'components'
import styles from './modelingLayout.module.css'
import { selectModelingStatus } from 'selectors'
import { ShowControlsDialogButton } from './ShowControlsDialogButton'

/**
 * Блок, содержащий 3D модель
 * @returns {JSX.Element}
 */
export const ModelingLayout = (props: LayoutProps) => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <FullContainer
      {...props}
      className={styleClasses(props.className, styles.layout)}
    >
      <Canvas />

      {modelingStatus === 'idle' && <ShowControlsDialogButton />}
    </FullContainer>
  )
}
