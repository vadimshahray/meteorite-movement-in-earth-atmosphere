import { Item, Section } from 'components'
import { CameraToggler } from './CameraToggler'
import { VideocamOutlined } from '@mui/icons-material'

export const CameraSettings = () => {
  return (
    <Section title='Камера' Icon={VideocamOutlined} collapsible>
      <Item label='Положение камеры'>
        <CameraToggler />
      </Item>
    </Section>
  )
}
