import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectObjectModelS } from 'selectors'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const SField = () => {
  const dispatch = useDispatch()
  const S = useSelector(selectObjectModelS)

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
      value={S.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
