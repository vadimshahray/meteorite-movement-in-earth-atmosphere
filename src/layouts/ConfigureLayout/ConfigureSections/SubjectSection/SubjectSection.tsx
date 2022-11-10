import { useConfigureToolbar } from 'hooks'
import { useEffect } from 'react'
import { ActivePhysicalModel } from './ActivePhysicalModel'
import { KField, MField, RField, SField, YField } from './Fields'
import { PickPhysicalObjectModelButton } from './PickPhysicalObjectModelButton'

/** Секция конфигурации "Исследуемый объект" */
export const SubjectSection = () => {
  const { setActionButton } = useConfigureToolbar()

  useEffect(() => {
    setActionButton(<PickPhysicalObjectModelButton />)

    return () => setActionButton()
  }, [setActionButton])

  return (
    <div>
      <ActivePhysicalModel />

      <MField />
      <KField />
      <SField />
      <YField />
      <RField />
    </div>
  )
}
