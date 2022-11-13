import { FullContainer } from 'components'
import React from 'react'
import { styleClasses } from 'utils'
import styles from './modelingLayout.module.css'
import { Scene } from './Scene'

/**
 * Блок, содержащий 3D модель
 * @returns {JSX.Element}
 */
export const ModelingLayout = (props: LayoutProps) => {
  return (
    <FullContainer
      {...props}
      className={styleClasses(props.className, styles.layout)}
    >
      <Scene />
    </FullContainer>
  )
}
