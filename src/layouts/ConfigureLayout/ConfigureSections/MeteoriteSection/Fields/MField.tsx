import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const MField = () => {
  const dispatch = useDispatch()

  const handleValid = (value: number) => {
    dispatch(
      setPhysicalModelData({
        m: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='M'
      label='Масса, кг'
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
