import { Item, Section } from 'components'
import { VideocamOutlined } from '@mui/icons-material'
import { ActiveCameraToggler } from './ActiveCameraToggler'

export const CameraSection = () => {
  return (
    <Section title='Камера' Icon={VideocamOutlined} collapsible>
      <Item label='Положение камеры'>
        <ActiveCameraToggler />
      </Item>
    </Section>
  )
}
