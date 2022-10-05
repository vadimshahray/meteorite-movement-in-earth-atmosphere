import { Container, ThemeButtonContainer } from 'components'
import React from 'react'
import styles from './configureToolbar.module.css'

/**
 * Тулбар секции ввода данных ConfigureLayout
 */
export const ConfigureToolbar = () => {
  return (
    <Container className={styles.layout}>
      {'Ввод данных'}
      <ThemeButtonContainer />
    </Container>
  )
}
