import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Divider } from '@mui/material'
import { Item, Section } from 'components'
import { ModelingMeteoriteAverageVelocity } from './ModelingMeteoriteAverageVelocity'
import { ModelingMeteoriteDistance } from './ModelingMeteoriteDistance'
import { ModelingMeteoriteMaxVelocity } from './ModelingMeteoriteMaxVelocity'
import { ModelingMeteoriteMinVelocity } from './ModelingMeteoriteMinVelocity'
import { ModelingMeteoriteVelocity } from './ModelingMeteoriteVelocity'
import { ModelingMeteoriteXOffset } from './ModelingMeteoriteXOffset'

export const ModelingInfoSection = () => {
  return (
    <Section title='Информация о метеорите' Icon={InfoOutlinedIcon} collapsible>
      <Item label='Скорость падения'>
        <ModelingMeteoriteVelocity />
      </Item>

      <Item label='Макс. скорость падения'>
        <ModelingMeteoriteMaxVelocity />
      </Item>

      <Item label='Мин. скорость падения'>
        <ModelingMeteoriteMinVelocity />
      </Item>

      <Item label='Ср. скорость падения'>
        <ModelingMeteoriteAverageVelocity />
      </Item>

      <Divider />

      <Item label='Расстояние до столкновения'>
        <ModelingMeteoriteDistance />
      </Item>

      <Item label='Смещение'>
        <ModelingMeteoriteXOffset />
      </Item>
    </Section>
  )
}
