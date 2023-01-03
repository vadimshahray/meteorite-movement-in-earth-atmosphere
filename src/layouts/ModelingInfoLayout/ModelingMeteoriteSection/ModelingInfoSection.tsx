import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { Item, Section } from 'components'
import { CollisionTime } from './CollisionTime'
import { selectModelingStatus } from 'selectors'
import { InfoOutlined } from '@mui/icons-material'
import { ModelingMeteoriteDistance } from './ModelingMeteoriteDistance'
import { ModelingMeteoriteVelocity } from './ModelingMeteoriteVelocity'
import { ModelingMeteoriteMaxVelocity } from './ModelingMeteoriteMaxVelocity'
import { ModelingMeteoriteAverageVelocity } from './ModelingMeteoriteAverageVelocity'

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
