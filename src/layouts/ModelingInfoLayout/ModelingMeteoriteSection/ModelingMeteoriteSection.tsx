import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Item, Section } from 'components'
import {
  ModelingMeteoriteDistance,
  ModelingMeteoriteVelocity,
  ModelingMeteoriteXOffset,
} from './ModelingMeteoirteInfo'

export const ModelingMeteoriteSection = () => {
  return (
    <Section title='Информация о метеорите' Icon={InfoOutlinedIcon}>
      <Item label='Скорость падения, м/c'>
        <ModelingMeteoriteVelocity />
      </Item>

      <Item label='Расстояние до столкновения, м'>
        <ModelingMeteoriteDistance />
      </Item>

      <Item label='Смещение, м'>
        <ModelingMeteoriteXOffset />
      </Item>
    </Section>
  )
}
