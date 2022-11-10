import { ListDialog, ListDialogItem } from 'components'
import { useDispatch } from 'hooks'
import { setActivePhysicalModel } from 'slices'
import { physicalModels } from 'utils'

export type PhysicalModelsListDialogProps = {
  onClose: () => void
}

export const PhysicalModelsListDialog = ({
  onClose,
}: PhysicalModelsListDialogProps) => {
  const dispatch = useDispatch()

  const items = physicalModels.map(
    (m): ListDialogItem => ({
      key: m.key as string,
      label: m.name,
    }),
  )

  const onItemSelected = (key: string) => {
    dispatch(setActivePhysicalModel(key as PhysicalModels))
  }

  return (
    <ListDialog
      title='Модели физических тел'
      items={items}
      onItemSelected={onItemSelected}
      onClose={onClose}
    />
  )
}
