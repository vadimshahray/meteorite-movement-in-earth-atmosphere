import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectObjectModelR } from 'selectors'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'
import { object } from 'yup'

const schema = object({
  value: positiveNumberRule,
})

const extractValueObject = (input: string) => ({
  value: input,
})

export const RField = () => {
  const dispatch = useDispatch()
  const R = useSelector(selectObjectModelR)

  const handleValid = (data: any) => {
    dispatch(
      setPhysicalModelData({
        R: data.value as number,
      }),
    )
  }

  return (
    <ValidatedTextField
      label='Радиус объекта, м'
      value={R.toString()}
      schema={schema}
      extractValueObject={extractValueObject}
      onValid={handleValid}
    />
  )
}
