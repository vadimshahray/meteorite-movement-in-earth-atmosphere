import VideocamIcon from '@mui/icons-material/Videocam'
import { Item, Section } from 'components'
import { CameraToggler } from './CameraToggler'

export const CameraSettings = () => {
  return (
    <Section title='Камера' Icon={VideocamIcon}>
      <Item label='Положение камеры'>
        <CameraToggler />
      </Item>
    </Section>
  )
}
