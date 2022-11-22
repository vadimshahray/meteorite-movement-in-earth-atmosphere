import StopIcon from '@mui/icons-material/Stop'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { setIsModeling } from 'slices'

export const StopModelingButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setIsModeling(false))
  }

  return (
    <Button variant='contained' startIcon={<StopIcon />} onClick={handleClick}>
      Остановить
    </Button>
  )
}
