import StopOutlinedIcon from '@mui/icons-material/StopOutlined'
import { Button } from 'components'
import { useDispatch } from 'hooks'
import { stopModeling } from 'slices'

export const StopModelingButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(stopModeling())
  }

  return (
    <Button
      variant='contained'
      startIcon={<StopOutlinedIcon />}
      onClick={handleClick}
    >
      Стоп
    </Button>
  )
}
