import React from 'react'
import { ActivePhysicalModel } from './ActivePhysicalModel'
import { KField, MField, RField, SField, YField } from './Fields'

/** Секция конфигурации "Исследуемый объект" */
export const SubjectSection = () => {
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
