import { FullContainer } from 'components'
import { ConfigureLayout, ModelingLayout, PlayerLayout } from 'layouts'
import React from 'react'
import styles from './mainLayout.module.css'

/**
 * Блок разметки главной страницы приложения
 * @returns {JSX.Element}
 */
export const MainLayout = () => {
  return (
    <FullContainer className={styles.layout}>
      <ModelingLayout />
      <ConfigureLayout />
      <PlayerLayout />
    </FullContainer>
  )
}
