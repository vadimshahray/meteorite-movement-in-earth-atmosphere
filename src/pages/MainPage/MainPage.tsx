import { Suspense } from 'react'
import { InfoLayout, ModelingLayout } from 'layouts'
import { ControlsDialog, FullContainer } from 'components'
import { MainPageSplashScreen } from './MainPageSplashScreen'

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
      </Suspense>
    </FullContainer>
  )
}
