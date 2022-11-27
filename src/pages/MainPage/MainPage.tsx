import { FullContainer } from 'components'
import { InfoLayout, ModelingLayout } from 'layouts'
import React from 'react'
import styles from './mainPage.module.css'

export const MainPage = () => {
  return (
    <FullContainer className={styles.layout}>
      <ModelingLayout />
      <InfoLayout />
    </FullContainer>
  )
}
