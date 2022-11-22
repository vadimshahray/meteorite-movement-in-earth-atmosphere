import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Button } from 'components'
import { useDispatch } from 'hooks'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { selectIsUserSectionInputValid } from 'selectors'
import { setIsModeling } from 'slices'
import { errorSnackbar } from 'utils/snackbar'

/** Кнопка запуска моделирования */
export const StartModelingButton = () => {
  const dispatch = useDispatch()
  const isUserInputValid = useSelector(selectIsUserSectionInputValid)

  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    if (isUserInputValid) {
      dispatch(setIsModeling(true))
      return
    }

    enqueueSnackbar(
      'Введенные данные содержат ошибки. Исправьте их!',
      errorSnackbar('Невозможно начать моделирование!'),
    )
  }

  return (
    <Button
      variant='contained'
      startIcon={<PlayArrowIcon />}
      onClick={handleClick}
    >
      Моделировать
    </Button>
  )
}
