import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import { Button } from 'components'
import { useDispatch } from 'hooks'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { selectIsUserSectionInputValid } from 'selectors'
import { startModeling } from 'slices'
import { errorSnackbar } from 'utils'

/** Кнопка запуска моделирования */
export const StartModelingButton = () => {
  const dispatch = useDispatch()
  const isUserInputValid = useSelector(selectIsUserSectionInputValid)

  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    if (isUserInputValid) {
      dispatch(startModeling())
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
      startIcon={<PlayArrowOutlinedIcon />}
      onClick={handleClick}
    >
      Запуск
    </Button>
  )
}
