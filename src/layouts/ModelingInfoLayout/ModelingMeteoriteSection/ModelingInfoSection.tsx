import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Divider } from '@mui/material'
import { Item, Section } from 'components'
import { ModelingMeteoriteAverageVelocity } from './ModelingMeteoriteAverageVelocity'
import { ModelingMeteoriteDistance } from './ModelingMeteoriteDistance'
import { ModelingMeteoriteMaxVelocity } from './ModelingMeteoriteMaxVelocity'
import { ModelingMeteoriteVelocity } from './ModelingMeteoriteVelocity'
import { ModelingMeteoriteXOffset } from './ModelingMeteoriteXOffset'

export const ModelingInfoSection = () => {
  return (
    <Section title='Полученные сведения' Icon={InfoOutlinedIcon} collapsible>
      <Item label='Скорость падения'>
        <ModelingMeteoriteVelocity />
      </Item>

      <Item label='Макс. скорость падения'>
        <ModelingMeteoriteMaxVelocity />
      </Item>

      <Item label='Ср. скорость падения'>
        <ModelingMeteoriteAverageVelocity />
      </Item>

      <Divider sx={{ margin: 1 }} />

      <Item label='Расстояние до столкновения'>
        <ModelingMeteoriteDistance />
      </Item>

      <Item label='Смещение'>
        <ModelingMeteoriteXOffset />
      </Item>
    </Section>
  )
}
