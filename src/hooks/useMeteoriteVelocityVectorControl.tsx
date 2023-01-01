import { PointerEvent } from 'react'
import { useSelector } from 'react-redux'
import {
  selectInteractiveControlValue,
  selectMeteoriteVelocityVector,
  selectModelingStatus,
} from 'selectors'
import { setMeteoriteData } from 'slices'
import { getVectorFromAngelAndVector } from 'utils'
import { useDispatch } from './useDispatch'

let isPointerDown = false
let pointerScreenX = 0

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

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    isPointerDown = false
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown) return

    const angle =
      Math.sign(pointerScreenX - e.screenX) * velocityVectorControl * 0.1
    const newVector = getVectorFromAngelAndVector(angle, velocityVector)

    dispatch(
      setMeteoriteData({
        velocityVectorX: newVector.x,
        velocityVectorY: newVector.y,
      }),
    )
  }

  return {
    onPointerDown: modelingStatus === 'idle' ? onPointerDown : undefined,
    onPointerUp: modelingStatus === 'idle' ? onPointerUp : undefined,
    onPointerMove: modelingStatus === 'idle' ? onPointerMove : undefined,
  }
}
