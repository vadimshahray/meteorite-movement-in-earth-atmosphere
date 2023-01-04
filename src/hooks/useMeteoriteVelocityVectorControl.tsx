import { useDispatch } from '@hooks'
import { PointerEvent } from 'react'
import { useSelector } from 'react-redux'
import { setMeteoriteData } from '@slices'
import { getVectorFromAngleAndVector } from '@utils'
import {
  selectModelingStatus,
  selectInteractiveControlValue,
  selectMeteoriteVelocityVector,
} from '@selectors'

let pointerScreenX = 0
let isPointerDown = false

export const useMeteoriteVelocityVectorControl = () => {
  const dispatch = useDispatch()

  const modelingStatus = useSelector(selectModelingStatus)

  const velocityVector = useSelector(selectMeteoriteVelocityVector)
  const velocityVectorControl = useSelector(
    selectInteractiveControlValue('@MeteoriteVelocityVectorControl'),
  )

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    isPointerDown = true
    pointerScreenX = e.screenX
  }

  const onPointerUp = (_: PointerEvent<HTMLDivElement>) => {
    isPointerDown = false
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown) return

    const angle =
      Math.sign(pointerScreenX - e.screenX) * velocityVectorControl * 0.1
    const newVector = getVectorFromAngleAndVector(angle, velocityVector)

    dispatch(
      setMeteoriteData({
        velocityVectorX: newVector.x,
        velocityVectorY: newVector.y,
      }),
    )
  }

  return {
    onPointerUp: modelingStatus === 'idle' ? onPointerUp : undefined,
    onPointerDown: modelingStatus === 'idle' ? onPointerDown : undefined,
    onPointerMove: modelingStatus === 'idle' ? onPointerMove : undefined,
  }
}
