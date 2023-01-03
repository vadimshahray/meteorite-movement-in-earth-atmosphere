import { useEffect } from 'react'
import { Container } from 'components'
import { ChartsSection } from './ChartsSection'
import { CameraSettings } from './CameraSettings'
import { PublicOutlined } from '@mui/icons-material'
import { useModelingFinishedSnackbar, useToolbar } from 'hooks'
import { ModelingInfoSection } from './ModelingMeteoriteSection'

export const ModelingInfoLayout = () => {
  const { setTitle, setIcon } = useToolbar()

  useModelingFinishedSnackbar()

  useEffect(() => {
    setTitle('Моделирование')
    setIcon(PublicOutlined)
  }, [setTitle, setIcon])

  return (
    <Container disableGuttersV>
      <CameraSettings />

      <ChartsSection />

      <ModelingInfoSection />
    </Container>
  )
}
