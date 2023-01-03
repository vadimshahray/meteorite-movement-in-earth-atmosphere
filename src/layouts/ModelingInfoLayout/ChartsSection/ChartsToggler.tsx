import { charts } from '@utils'
import { useDispatch } from '@hooks'
import { Toggler } from '@components'
import { setActiveChart } from '@slices'
import { useSelector } from 'react-redux'
import { selectActiveChart } from '@selectors'

export const ChartsToggler = () => {
  const dispatch = useDispatch()

  const activeChart = useSelector(selectActiveChart)

  const handleChange = (activeChart: string) => {
    dispatch(setActiveChart(activeChart as Charts))
  }

  return <Toggler value={activeChart} items={charts} onChange={handleChange} />
}
