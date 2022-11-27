import { DataItem } from 'components'
import { useSelector } from 'react-redux'
import { selectPlanetR } from 'selectors'

export const RadiusDataItem = () => {
  const radius = useSelector(selectPlanetR)

  const radiusValueString = `${radius.value} * 10^${radius.power}`

  return <DataItem label='Радиус планеты, м' value={radiusValueString} />
}
