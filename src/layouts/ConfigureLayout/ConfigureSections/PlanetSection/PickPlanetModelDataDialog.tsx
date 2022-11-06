import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectPlanetModels } from 'selectors'
import { setPlanetModelData } from 'slices'

export type PickPlanetModelDataDialogProps = {
  onClose: () => void
}

export const PickPlanetModelDataDialog = ({
  onClose,
}: PickPlanetModelDataDialogProps) => {
  const dispatch = useDispatch()
  const planets = useSelector(selectPlanetModels)

  const handleClick = (chosenPlanet: keyof PlanetModels) => {
    dispatch(setPlanetModelData(chosenPlanet))
    onClose()
  }

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Данные других планет</DialogTitle>
      <List>
        {planets.map((p) => (
          <ListItem key={p.key}>
            <ListItemButton onClick={() => handleClick(p.key)}>
              <ListItemText primary={p.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
