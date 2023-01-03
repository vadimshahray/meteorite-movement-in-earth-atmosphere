import { useEffect } from 'react'
import { Container } from '@components'
import { ChartsSection } from './ChartsSection'
import { CameraSection } from './CameraSection'
import { PublicOutlined } from '@mui/icons-material'
import { ModelingInfoSection } from './ModelingInfoSection'
import { useModelingFinishedSnackbar, useToolbar } from '@hooks'

export const ModelingInfoLayout = () => {
  const { setTitle, setIcon } = useToolbar()

  useModelingFinishedSnackbar()

  useEffect(() => {
    setTitle('Моделирование')
    setIcon(PublicOutlined)
  }, [setTitle, setIcon])

  return (
    <Container disableGuttersV>
      <CameraSection />

      <ChartsSection />

      <ModelingInfoSection />
    </Container>
  )
}
