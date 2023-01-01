import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import { Container } from 'components'
import { useModelingFinishedSnackbar, useToolbar } from 'hooks'
import { useEffect } from 'react'
import { CameraSettings } from './CameraSettings'
import { ChartsSection } from './ChartsSection'
import { ModelingInfoSection } from './ModelingMeteoriteSection'

export const ModelingInfoLayout = () => {
  const { setTitle, setIcon } = useToolbar()

  useModelingFinishedSnackbar()

  useEffect(() => {
    setTitle('Моделирование')
    setIcon(PublicOutlinedIcon)
  }, [setTitle, setIcon])

  return (
    <Container disableGuttersV>
      <CameraSettings />

      <ChartsSection />

      <ModelingInfoSection />
    </Container>
  )
}
