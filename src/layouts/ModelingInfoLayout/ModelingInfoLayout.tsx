import { FullContainer } from 'components'
import { useToolbar } from 'hooks'
import { useEffect } from 'react'
import { StopModelingButton } from './StopModelingButton'

export const ModelingInfoLayout = () => {
  const { setTitle } = useToolbar()

  useEffect(() => {
    setTitle('Моделирование')
  }, [setTitle])

  return (
    <FullContainer>
      <StopModelingButton />
    </FullContainer>
  )
}
