import { ValidatedTextField } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectActiveObjectModel, selectObjectModelR } from 'selectors'
import { setPhysicalModelData } from 'slices'
import { physicalModelsPropertiesMaps, positiveNumberRule } from 'utils'

export const RField = () => {
  const dispatch = useDispatch()

  const activeModel = useSelector(selectActiveObjectModel)
  const isVisible = physicalModelsPropertiesMaps[activeModel].R

  const R = useSelector(selectObjectModelR)

  const handleValid = (value: number) => {
    dispatch(
      setPhysicalModelData({
        R: value,
      }),
    )
  }

  return isVisible ? (
    <ValidatedTextField
      label='Радиус объекта, м'
      adornment='R'
      value={R.toString()}
      rule={positiveNumberRule}
      onValid={handleValid}
    />
  ) : null
}
