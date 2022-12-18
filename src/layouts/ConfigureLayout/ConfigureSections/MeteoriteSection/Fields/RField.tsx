import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteRadius } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const RField = () => {
  const dispatch = useDispatch()

  const R = useSelector(selectMeteoriteRadius)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        radius: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      label='Радиус объекта, м'
      adornment='R'
      initialValue={R.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
