import { Container } from 'components'
import { useToolbar } from 'hooks'
import { useEffect } from 'react'
import { CameraSettings } from './CameraSettings'

export const ModelingInfoLayout = () => {
  const { setTitle } = useToolbar()

  useEffect(() => {
    setTitle('Моделирование')
  }, [setTitle])

  return (
    <Container>
      <CameraSettings />
    </Container>
  )
}
