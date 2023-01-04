import { Suspense } from 'react'
import { InfoLayout, ModelingLayout } from '@layouts'
import { MainPageSplashScreen } from './MainPageSplashScreen'
import {
  FullContainer,
  ControlsDialog,
  MeteoriteCanNotCollideDialog,
} from '@components'

export const MainPage = () => {
  return (
    <FullContainer
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 400px',

        overflowX: 'hidden',
      }}
    >
      <Suspense fallback={<MainPageSplashScreen />}>
        <ModelingLayout />

        <InfoLayout />

        <ControlsDialog />

        <MeteoriteCanNotCollideDialog />
      </Suspense>
    </FullContainer>
  )
}
