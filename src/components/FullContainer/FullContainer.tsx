import { Container, ContainerProps } from 'components'
import React from 'react'
import { styleClasses } from 'utils'
import styles from './fullContainer.module.css'

/**
 * Базовый контейнер на всю ширину
 * @param {ContainerProps}
 * @returns {JSX.Element}
 */
export const FullContainer = ({ className, ...props }: ContainerProps) => {
  return (
    <Container
      className={styleClasses(className, styles.layout)}
      {...props}
      maxWidth='xl'
      disableGutters
    />
  )
}
