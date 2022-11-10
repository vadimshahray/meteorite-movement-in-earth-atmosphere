import { ListDialog, ListDialogItem } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectActiveObjectModel } from 'selectors'
import { setActivePhysicalModel } from 'slices'
import { physicalModels } from 'utils'

export type PhysicalModelsListDialogProps = {
  onClose: () => void
}

export const PhysicalModelsListDialog = ({
  onClose,
}: PhysicalModelsListDialogProps) => {
  const activeModel = useSelector(selectActiveObjectModel)
  const dispatch = useDispatch()

  const items = physicalModels.map(
    (m): ListDialogItem => ({
      key: m.key as string,
      label: m.name,
    }),
  )

  const onItemSelected = (key: string) => {
    dispatch(setActivePhysicalModel(key as PhysicalModels))
    onClose()
  }

  return (
    <ListDialog
      title='Модели физических тел'
      items={items}
      selectedItem={activeModel}
      onItemSelected={onItemSelected}
      onClose={onClose}
    />
  )
}
