import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectObjectModelR } from 'selectors'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const RField = () => {
  const dispatch = useDispatch()
  const R = useSelector(selectObjectModelR)

  const handleValid = (value: number) => {
    dispatch(
      setPhysicalModelData({
        R: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      label='Радиус объекта, м'
      value={R.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
