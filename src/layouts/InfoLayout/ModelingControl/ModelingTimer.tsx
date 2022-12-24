import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectModelingTimer } from 'selectors'

export const ModelingTimer = () => {
  const { hours, minutes, seconds, milliseconds } =
    useSelector(selectModelingTimer)

  const timeString = `${addZeros(hours, 2)}:${addZeros(minutes, 2)}:${addZeros(
    seconds,
    2,
  )}:${addZeros(milliseconds, 3)}`

  return (
    <>
      {/**@ts-ignore */}
      <Box display='flex' alignItems='center'>
        <TimerOutlinedIcon sx={{ marginRight: '2px' }} fontSize='small' />

        <Typography fontFamily='Fira Code'>{timeString}</Typography>
      </Box>
    </>
  )
}

const addZeros = (x: number, count: number) => {
  let zeros = ''

  for (let i = 1; i < count; i++) {
    if (x / 10 ** i < 1) {
      zeros += '0'
    }
  }

  return zeros + x
}
