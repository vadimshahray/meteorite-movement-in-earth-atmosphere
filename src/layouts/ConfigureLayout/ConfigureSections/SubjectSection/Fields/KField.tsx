import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectObjectModelK } from 'selectors'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const KField = () => {
  const dispatch = useDispatch()
  const K = useSelector(selectObjectModelK)

  const handleValid = (value: number) => {
    dispatch(
      setPhysicalModelData({
        K: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      label='Коэффициент лобового сопротивления' //TODO: СИ
      value={K.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
