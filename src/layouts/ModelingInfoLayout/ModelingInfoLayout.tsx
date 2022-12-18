import PublicIcon from '@mui/icons-material/Public'
import { Container } from 'components'
import { useToolbar } from 'hooks'
import { useEffect } from 'react'
import { CameraSettings } from './CameraSettings'
import { ChartsSection } from './ChartsSection'

export const ModelingInfoLayout = () => {
  const { setTitle, setIcon } = useToolbar()

  useEffect(() => {
    setTitle('Моделирование')
    setIcon(PublicIcon)
  }, [setTitle, setIcon])

  return (
    <Container>
      <CameraSettings />

      <ChartsSection />
    </Container>
  )
}
