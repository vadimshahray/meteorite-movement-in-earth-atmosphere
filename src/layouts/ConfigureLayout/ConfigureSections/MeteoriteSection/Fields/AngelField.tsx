import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectMeteoriteAngle } from 'selectors'
import { setMeteoriteData } from 'slices'
import { positiveNumberRule } from 'utils'

export const AngelField = () => {
  const dispatch = useDispatch()
  const angel = useSelector(selectMeteoriteAngle)

  const handleValid = (value: number) => {
    dispatch(
      setMeteoriteData({
        angel: value,
      }),
    )
  }

  return (
    <ValidatedTextField
      adornment='𝜣'
      label='Угол падения, °'
      value={angel.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  )
}
