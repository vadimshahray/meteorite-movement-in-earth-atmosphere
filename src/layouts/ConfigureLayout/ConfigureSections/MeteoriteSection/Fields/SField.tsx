import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const SField = () => {
  const dispatch = useDispatch()

  const handleValid = (value: number) => {
    dispatch(
      setPhysicalModelData({
        S: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='S'
      label='Площадь поперечного сечения, м²'
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
