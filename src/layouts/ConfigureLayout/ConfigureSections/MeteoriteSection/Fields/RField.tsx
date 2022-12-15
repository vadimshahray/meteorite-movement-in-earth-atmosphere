import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const RField = () => {
  const dispatch = useDispatch()

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
      adornment='R'
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
