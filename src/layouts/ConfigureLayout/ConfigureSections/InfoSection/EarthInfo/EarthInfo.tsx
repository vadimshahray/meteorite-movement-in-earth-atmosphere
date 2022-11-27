import { Container } from 'components'
import {
  GravitationalAccelerationDataItem,
  MassDataItem,
  RadiusDataItem,
} from './DataItems'
import { InfoBlockTitle } from '../InfoBlockTitle'

export const EarthInfo = () => {
  return (
    <Container disableGutters>
      <InfoBlockTitle title='Данные планеты' />

      <RadiusDataItem />
      <MassDataItem />
      <GravitationalAccelerationDataItem />
    </Container>
  )
}
