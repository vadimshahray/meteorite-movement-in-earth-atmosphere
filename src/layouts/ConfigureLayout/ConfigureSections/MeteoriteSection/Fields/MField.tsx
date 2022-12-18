import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoritem } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const MField = () => {
  const dispatch = useDispatch()
  const m = useSelector(selectMeteoritem)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        m: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='M'
      label='Масса, кг'
      initialValue={m.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
