import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteS } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const SField = () => {
  const dispatch = useDispatch()
  const S = useSelector(selectMeteoriteS)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        S: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='S'
      label='Площадь поперечного сечения, м²'
      initialValue={S.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
