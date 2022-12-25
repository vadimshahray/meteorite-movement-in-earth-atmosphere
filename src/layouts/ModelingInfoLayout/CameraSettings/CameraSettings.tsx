import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import { Item, Section } from 'components'
import { CameraToggler } from './CameraToggler'

export const CameraSettings = () => {
  return (
    <Section title='Камера' Icon={VideocamOutlinedIcon} collapsible>
      <Item label='Положение камеры'>
        <CameraToggler />
      </Item>
    </Section>
  )
}
