import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Item, Section } from 'components'
import { ModelingMeteoriteDistance } from './ModelingMeteoriteDistance'
import { ModelingMeteoriteVelocity } from './ModelingMeteoriteVelocity'
import { ModelingMeteoriteXOffset } from './ModelingMeteoriteXOffset'

export const ModelingInfoSection = () => {
  return (
    <Section title='Информация о метеорите' Icon={InfoOutlinedIcon} collapsible>
      <Item label='Скорость падения'>
        <ModelingMeteoriteVelocity />
      </Item>

      <Item label='Расстояние до столкновения'>
        <ModelingMeteoriteDistance />
      </Item>

      <Item label='Смещение'>
        <ModelingMeteoriteXOffset />
      </Item>
    </Section>
  )
}
