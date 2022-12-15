import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const KField = () => {
  const dispatch = useDispatch()

  const handleValid = (value: number) => {
    dispatch(
      setPhysicalModelData({
        K: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='k'
      label='Коэффициент лобового сопротивления' //TODO: СИ
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
