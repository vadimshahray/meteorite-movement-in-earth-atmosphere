import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectObjectModelm } from 'selectors'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'

export const MField = () => {
  const dispatch = useDispatch()
  const m = useSelector(selectObjectModelm)

  const handleValid = (value: number) => {
    dispatch(
      setPhysicalModelData({
        m: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      label='Масса, кг'
      value={m.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
