import { useConfigureToolbar } from 'hooks'
import { useEffect } from 'react'
import { ActivePhysicalModel } from './ActivePhysicalModel'
import { BackToObjectModelDataButton } from './BackToObjectModelDataButton'
import { KField, MField, RField, SField, YField } from './Fields'
import { PickPhysicalObjectModelButton } from './PickPhysicalObjectModelButton'

/** Секция конфигурации "Исследуемый объект" */
export const SubjectSection = () => {
  const { setActionButtons } = useConfigureToolbar()

  useEffect(() => {
    setActionButtons([
      <PickPhysicalObjectModelButton />,
      <BackToObjectModelDataButton />,
    ])

    return () => setActionButtons()
  }, [setActionButtons])

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
