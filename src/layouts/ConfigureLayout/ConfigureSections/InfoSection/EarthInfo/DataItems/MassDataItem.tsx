import { DataItem } from 'components'
import { useSelector } from 'react-redux'
import { selectPlanetM } from 'selectors'

export const MassDataItem = () => {
  const mass = useSelector(selectPlanetM)

  const massValueString = `${mass.value} * 10^${mass.power}`

  return <DataItem label='Масса планеты, кг' value={massValueString} />
}
