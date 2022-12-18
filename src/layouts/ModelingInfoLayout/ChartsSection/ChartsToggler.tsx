import { Toggler } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectActiveChart } from 'selectors'
import { setActiveChart } from 'slices'
import { charts } from 'utils'

export const ChartsToggler = () => {
  const dispatch = useDispatch()

  const activeChart = useSelector(selectActiveChart)

  const handleChange = (activeChart: string) => {
    dispatch(setActiveChart(activeChart as Charts))
  }

  return <Toggler value={activeChart} items={charts} onChange={handleChange} />
}
