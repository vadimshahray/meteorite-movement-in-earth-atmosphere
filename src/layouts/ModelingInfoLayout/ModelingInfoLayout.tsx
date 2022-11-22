import { Container } from 'components'
import { useToolbar } from 'hooks'
import { useEffect } from 'react'

export const ModelingInfoLayout = () => {
  const { setTitle } = useToolbar()

  useEffect(() => {
    setTitle('Моделирование')
  }, [setTitle])

  return <Container></Container>
}
