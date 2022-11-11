import { ListDialog, ListDialogItem } from 'components'
import { useDispatch } from 'hooks'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { selectPlanetModels } from 'selectors'
import { setPlanetModelData } from 'slices'
import { infoSnackbar } from 'utils'

export type PickPlanetModelDataDialogProps = {
  onClose: () => void
}

export const PlanetModelsListDialog = ({
  onClose,
}: PickPlanetModelDataDialogProps) => {
  const dispatch = useDispatch()
  const planets = useSelector(selectPlanetModels).map(
    (p): ListDialogItem => ({
      key: p.key,
      label: p.name,
    }),
  )

  const { enqueueSnackbar } = useSnackbar()

  const onItemSelected = (planet: ListDialogItem) => {
    dispatch(setPlanetModelData(planet.key as keyof PlanetModels))
    enqueueSnackbar(
      `Данные модели '${planet.label}' скопированы в поля формы`,
      infoSnackbar('Копирование данных'),
    )
    onClose()
  }

  return (
    <ListDialog
      title='Планеты Солнечной системы'
      items={planets}
      onClose={onClose}
      onItemSelected={onItemSelected}
    />
  )
}
