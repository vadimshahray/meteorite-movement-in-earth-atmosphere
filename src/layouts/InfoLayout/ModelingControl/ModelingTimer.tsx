import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'
import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsModeling } from 'selectors'

const INTERVAL_STEP = 33

export const ModelingTimer = () => {
  const isModeling = useSelector(selectIsModeling)
  const [time, setTime] = useState('')

  useEffect(() => {
    if (!isModeling) return

    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime

      setTime(ticksToTime(elapsedTime))
    }, INTERVAL_STEP)

    return () => clearInterval(interval)
  }, [isModeling])

  return isModeling ? (
    //@ts-ignore
    <Box display='flex' alignItems='center'>
      <TimerOutlinedIcon sx={{ marginRight: '2px' }} fontSize='small' />

      <Typography fontFamily='Fira Code'>{time}</Typography>
    </Box>
  ) : null
}

const ticksToTime = (ms: number) => {
  const hours = Math.floor(ms / 1000 / 60 / 60)
  const minutes = Math.floor(ms / 1000 / 60) % 60
  const seconds = Math.floor(ms / 1000) % 60

  return `${addZeros(hours, 2)}:${addZeros(minutes, 2)}:${addZeros(
    seconds,
    2,
  )}:${addZeros(ms % 1000, 3)}`
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
