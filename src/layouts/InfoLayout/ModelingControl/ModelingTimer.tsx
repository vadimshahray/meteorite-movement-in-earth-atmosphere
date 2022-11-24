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
    if (!isModeling) {
      return
    }

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

      <Typography>{time}</Typography>
    </Box>
  ) : null
}

const ticksToTime = (ms: number) => {
  const minutes = Math.floor(ms / 1000 / 60)
  const seconds = Math.floor(ms / 1000) % 60

  return `${minutes}:${seconds}:${ms % 1000}`
}
