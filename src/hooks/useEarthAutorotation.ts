import { useEffect, useState } from 'react'

const TIMER_INTERVAL_MS = 1000
const ANGLE_Y_STEP = ((2 * Math.PI) / 24 / 60 / 60 / 1000) * TIMER_INTERVAL_MS

export const useEarthAutorotation = () => {
  const [angleY, setAngleY] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngleY(angleY + ANGLE_Y_STEP)
    }, TIMER_INTERVAL_MS)

    return () => clearInterval(interval)
  })

  return angleY
}
