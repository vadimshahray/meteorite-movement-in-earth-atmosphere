import { Container } from 'components'
import React from 'react'
import { styleClasses } from 'utils'
import styles from './configureLayout.module.css'

/**
 * Блок, содержащий все, что связано с настройкой физических моделей (поля ввода данных и т.п.)
 * @returns {JSX.Element}
 */
export const ConfigureLayout = ({ className, ...props }: LayoutProps) => {
  return (
    <Container className={styleClasses(styles.layout, className)} {...props}>
      Config
    </Container>
  )
}
