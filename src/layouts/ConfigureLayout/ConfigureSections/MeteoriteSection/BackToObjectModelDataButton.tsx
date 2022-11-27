import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { IconButton } from '@mui/material'
import { useDispatch } from 'hooks'
import { useSnackbar } from 'notistack'
import { setActiveObjectModelData } from 'slices'
import { infoSnackbar } from 'utils'

export const BackToObjectModelDataButton = () => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    dispatch(setActiveObjectModelData())
    enqueueSnackbar(
      'Введенные вами данные сброшены, а данные активной модели восстановлены',
      infoSnackbar('Данные сброшены'),
    )
  }

  return (
    <IconButton key='BackToModelDataButton' onClick={handleClick}>
      <RestartAltIcon />
    </IconButton>
  )
}
