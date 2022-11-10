import { useConfigureToolbar } from 'hooks'
import { useEffect } from 'react'
import { KField, MField, RField, SField, YField } from './Fields'
import { PickPhysicalObjectModelButton } from './PickPhysicalObjectModelButton'

/** Секция конфигурации "Исследуемый объект" */
export const SubjectSection = () => {
  const { setActionButton } = useConfigureToolbar()

  useEffect(() => {
    setActionButton(<PickPhysicalObjectModelButton />)

    return () => setActionButton()
  }, [])

  return (
    <div>
      <MField />
      <KField />
      <SField />
      <YField />
      <RField />
    </div>
  )
}
