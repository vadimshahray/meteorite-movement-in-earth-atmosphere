import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectPlanetR } from 'selectors'
import { setPlanetData } from 'slices'
import { positiveNumberRule } from 'utils'
import { object } from 'yup'

const schema = object({
  R: positiveNumberRule.clone(),
})

const extractValueObject = (input: string) => ({
  R: input,
})

export const PlanetRField = () => {
  const dispatch = useDispatch()
  const R = useSelector(selectPlanetR)

  const handleValid = (data: any) => {
    dispatch(
      setPlanetData({
        R: data.R as number,
      }),
    )
  }

  return (
    <ValidatedTextField
      label='Радиус планеты'
      value={R.toString()}
      schema={schema}
      extractValueObject={extractValueObject}
      onValid={handleValid}
    />
  )
}
