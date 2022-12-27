import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Divider } from '@mui/material'
import { Item, Section } from 'components'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { CollisionTime } from './CollisionTime'
import { ModelingMeteoriteAverageVelocity } from './ModelingMeteoriteAverageVelocity'
import { ModelingMeteoriteDistance } from './ModelingMeteoriteDistance'
import { ModelingMeteoriteMaxVelocity } from './ModelingMeteoriteMaxVelocity'
import { ModelingMeteoriteVelocity } from './ModelingMeteoriteVelocity'

export const ModelingInfoSection = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  return (
    <Section title='Полученные сведения' Icon={InfoOutlinedIcon} collapsible>
      {modelingStatus !== 'finished' && (
        <>
          <Item label='Расстояние до столкновения'>
            <ModelingMeteoriteDistance />
          </Item>

          <Item label='Время до столкновения'>
            <CollisionTime />
          </Item>
        </>
      )}

      <Item label='Скорость падения'>
        <ModelingMeteoriteVelocity />
      </Item>

      <Divider sx={{ margin: 1 }} />

      <Item label='Макс. скорость падения'>
        <ModelingMeteoriteMaxVelocity />
      </Item>

      <Item label='Ср. скорость падения'>
        <ModelingMeteoriteAverageVelocity />
      </Item>
    </Section>
  )
}
