import { Suspense } from 'react'
import styles from './mainPage.module.css'
import { InfoLayout, ModelingLayout } from 'layouts'
import { ControlsDialog, FullContainer } from 'components'
import { MainPageSplashScreen } from './MainPageSplashScreen'

export const MainPage = () => {
  return (
    <FullContainer className={styles.layout}>
      <Suspense fallback={<MainPageSplashScreen />}>
        <ModelingLayout />

        <InfoLayout />

        <ControlsDialog />
      </Suspense>
    </FullContainer>
  )
}
