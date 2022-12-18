import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteMass } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const MField = () => {
  const dispatch = useDispatch()
  const m = useSelector(selectMeteoriteMass)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        mass: value,
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
