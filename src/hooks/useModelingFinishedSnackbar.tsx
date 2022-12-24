import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectModelingStatus } from 'selectors'
import { infoSnackbar } from 'utils'

export const useModelingFinishedSnackbar = () => {
  const modelingStatus = useSelector(selectModelingStatus)

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (modelingStatus === 'finished') {
      enqueueSnackbar(
        'Метеорит достиг поверхности Земли',
        infoSnackbar('Моделирование завершено'),
      )
    }
  }, [modelingStatus, enqueueSnackbar])

  return null
}
