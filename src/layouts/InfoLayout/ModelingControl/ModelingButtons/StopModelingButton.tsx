import StopOutlinedIcon from '@mui/icons-material/StopOutlined'
import { Button } from 'components'
import { useDispatch } from 'hooks'
import { useState } from 'react'
import { stopModeling } from 'slices'

export const StopModelingButton = () => {
  const dispatch = useDispatch()

  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = () => {
    setIsDisabled(true)
    dispatch(stopModeling())
  }

  return (
    <Button
      variant='contained'
      startIcon={<StopOutlinedIcon />}
      onClick={handleClick}
      disabled={isDisabled}
    >
      Стоп
    </Button>
  )
}
