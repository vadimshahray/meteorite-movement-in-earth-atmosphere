import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteInitialVelocity } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const InitialVelocityField = () => {
  const dispatch = useDispatch()
  const initialVelocity = useSelector(selectMeteoriteInitialVelocity)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        initialVelocity: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='𝓥₀'
      label='Начальная скорость, м/с'
      initialValue={initialVelocity.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
