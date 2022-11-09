import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectObjectModelm } from 'selectors'
import { setPhysicalModelData } from 'slices'
import { positiveNumberRule } from 'utils'
import { object } from 'yup'

const schema = object({
  value: positiveNumberRule,
})

const extractValueObject = (input: string) => ({
  value: input,
})

export const MField = () => {
  const dispatch = useDispatch()
  const m = useSelector(selectObjectModelm)

  const handleValid = (data: any) => {
    dispatch(
      setPhysicalModelData({
        m: data.value as number,
      }),
    )
  }

  return (
    <ValidatedTextField
      label='Масса, кг'
      value={m.toString()}
      schema={schema}
      extractValueObject={extractValueObject}
      onValid={handleValid}
    />
  )
}
