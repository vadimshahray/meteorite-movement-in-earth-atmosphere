import { FullContainer } from 'components'
import { InfoLayout, ModelingLayout } from 'layouts'
import React, { Suspense } from 'react'
import styles from './mainPage.module.css'
import { MainPageSplashScreen } from './MainPageSplashScreen'

export const MainPage = () => {
  return (
    <FullContainer className={styles.layout}>
      <Suspense fallback={<MainPageSplashScreen />}>
        <ModelingLayout />

        <InfoLayout />
      </Suspense>
    </FullContainer>
  )
}
