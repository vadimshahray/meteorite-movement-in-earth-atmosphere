import { SpeedOutlined } from '@mui/icons-material'
import { Section } from 'components'
import {
  VelocityVectorXField,
  VelocityVectorYField,
  VelocityVectorZField,
} from './Fields'

export const VelocityVectorSection = () => {
  return (
    <Section title='Вектор скорости' Icon={SpeedOutlined}>
      <VelocityVectorXField />

      <VelocityVectorYField />

      <VelocityVectorZField />
    </Section>
  )
}
