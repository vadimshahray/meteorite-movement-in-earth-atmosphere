import StopIcon from '@mui/icons-material/Stop'
import { Button } from 'components'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import { setIsModeling } from 'slices'
import { infoSnackbar } from 'utils'

export const StopModelingButton = () => {
  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    dispatch(setIsModeling(false))

    enqueueSnackbar(
      'Введенные данные содержат ошибки. Исправьте их!',
      infoSnackbar('Невозможно начать моделирование!'),
    )
  }

  return (
    <Button variant='contained' startIcon={<StopIcon />} onClick={handleClick}>
      Остановить
    </Button>
  )
}
