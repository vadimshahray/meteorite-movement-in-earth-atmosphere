import { DataItem } from 'components'
import { useSelector } from 'react-redux'
import { selectPlanetg } from 'selectors'

export const GravitationalAccelerationDataItem = () => {
  const g = useSelector(selectPlanetg)

  const gValueString = `${g}`

  return (
    <DataItem label='Ускорение свободного падения, м/с²' value={gValueString} />
  )
}
