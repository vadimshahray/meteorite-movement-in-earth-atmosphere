import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { Item, Section } from '@components'
import { selectModelingStatus } from '@selectors'
import { InfoOutlined } from '@mui/icons-material'
import {
  CollisionTime,
  ModelingMeteoriteDistance,
  ModelingMeteoriteVelocity,
  ModelingMeteoriteMaxVelocity,
  ModelingMeteoriteAverageVelocity,
} from './InfoItems'

export const ModelingInfoSection = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <Section title='Полученные сведения' Icon={InfoOutlined} collapsible>
      {modelingStatus !== 'finished' && (
        <>
          <Item label='Расстояние до столкновения'>
            <ModelingMeteoriteDistance />
          </Item>

          <Item label='Время до столкновения'>
            <CollisionTime />
          </Item>

          <Item label='Скорость падения'>
            <ModelingMeteoriteVelocity />
          </Item>

          <Divider sx={{ margin: 1 }} />
        </>
      )}

      <Item label='Макс. скорость падения'>
        <ModelingMeteoriteMaxVelocity />
      </Item>

      <Item label='Ср. скорость падения'>
        <ModelingMeteoriteAverageVelocity />
      </Item>
    </Section>
  )
}
