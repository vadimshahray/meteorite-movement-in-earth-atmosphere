import { ListDialog, ListDialogItem } from 'components'
import { useDispatch } from 'hooks'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { selectActiveObjectModel } from 'selectors'
import { setActivePhysicalModel } from 'slices'
import { infoSnackbar, physicalModels } from 'utils'

export type PhysicalModelsListDialogProps = {
  onClose: () => void
}

export const PhysicalModelsListDialog = ({
  onClose,
}: PhysicalModelsListDialogProps) => {
  const activeModel = useSelector(selectActiveObjectModel)
  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()

  const items = physicalModels.map(
    (m): ListDialogItem => ({
      key: m.key as string,
      label: m.name,
    }),
  )

  const onItemSelected = (model: ListDialogItem) => {
    dispatch(setActivePhysicalModel(model.key as PhysicalModels))
    enqueueSnackbar(
      `Данные модели '${model.label}' успешно использованы.`,
      infoSnackbar('Обновление данных.'),
    )
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
