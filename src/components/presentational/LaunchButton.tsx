import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Button } from 'components'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { selectIsUserSectionInputValid } from 'selectors'
import { errorSnackbar } from 'utils/snackbar'

export type LaunchButtonProps = {
  onClick: () => unknown
}

/** Кнопка запуска моделирования */
export const LaunchButton = ({ onClick }: LaunchButtonProps) => {
  const isUserInputValid = useSelector(selectIsUserSectionInputValid)

  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    if (isUserInputValid) {
      onClick()
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
