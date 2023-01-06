import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectMeteoriteVelocityVector } from '@selectors'
import { getAngleBetweenTwoVectors, radiansToDegrees } from '@utils'

export const VelocityAngle = () => {
  const velocityVector = useSelector(selectMeteoriteVelocityVector)

  const velocityAngle = radiansToDegrees(
    getAngleBetweenTwoVectors(velocityVector, {
      x: 1,
      y: 0,
    }),
  )

  return (
    <Typography variant='caption' textAlign='right'>
      *Угол падения: {velocityAngle.toFixed(3)}°
    </Typography>
  )
}
