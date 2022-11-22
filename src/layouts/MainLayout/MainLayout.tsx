import { FullContainer } from 'components'
import { InfoLayout, ModelingLayout } from 'layouts'
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
      <InfoLayout />
    </FullContainer>
  )
}
