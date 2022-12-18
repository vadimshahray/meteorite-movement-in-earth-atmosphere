import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteK } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const KField = () => {
  const dispatch = useDispatch()
  const K = useSelector(selectMeteoriteK)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        K: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='k'
      label='Коэффициент лобового сопротивления' //TODO: СИ
      initialValue={K.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
