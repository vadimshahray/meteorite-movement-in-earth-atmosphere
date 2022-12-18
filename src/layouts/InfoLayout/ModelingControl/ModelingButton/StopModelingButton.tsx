import StopOutlinedIcon from '@mui/icons-material/StopOutlined'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { setIsModeling } from 'slices'

export const StopModelingButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setIsModeling(false))
  }

  return (
    <Button
      variant='contained'
      startIcon={<StopOutlinedIcon />}
      onClick={handleClick}
    >
      Остановить
    </Button>
  )
}
