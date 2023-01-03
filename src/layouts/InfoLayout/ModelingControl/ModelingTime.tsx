import { useSelector } from 'react-redux'
import { selectModelingTime } from 'selectors'
import { Box, Typography } from '@mui/material'
import { TimerOutlined } from '@mui/icons-material'

export const ModelingTime = () => {
  const { hours, minutes, seconds, milliseconds } =
    useSelector(selectModelingTime)

  const timeString = `${addZeros(hours, 2)}:${addZeros(minutes, 2)}:${addZeros(
    seconds,
    2,
  )}:${addZeros(milliseconds, 3)}`

  return (
    <>
      {/**@ts-ignore */}
      <Box display='flex' alignItems='center'>
        <TimerOutlined sx={{ marginRight: '2px' }} fontSize='small' />

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
