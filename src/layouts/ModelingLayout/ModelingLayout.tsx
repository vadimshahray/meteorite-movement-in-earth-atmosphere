import { FullContainer } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { styleClasses } from 'utils'
import { Canvas } from './Canvas'
import styles from './modelingLayout.module.css'
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
