import { KField, MField, RField, SField, YField } from './Fields'

/** Секция конфигурации "Исследуемый объект" */
export const SubjectSection = () => {
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
