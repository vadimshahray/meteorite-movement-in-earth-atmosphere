import { ListDialog, ListDialogItem } from 'components'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectPlanetModels } from 'selectors'
import { setPlanetModelData } from 'slices'

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

  const handleClick = (chosenPlanet: string) => {
    dispatch(setPlanetModelData(chosenPlanet as keyof PlanetModels))
    onClose()
  }

  return (
    <ListDialog
      title='Планеты Солнечной системы'
      items={planets}
      onClose={onClose}
      onItemSelected={handleClick}
    />
  )
}
