import { PointerEvent } from 'react'
import { useSelector } from 'react-redux'
import { selectMeteoriteVelocityVector } from 'selectors'
import { setMeteoriteData } from 'slices'
import { getVectorFromAngelAndVector } from 'utils'
import { useDispatch } from './useDispatch'

let isPointerDown = false
let pointerScreenX = 0

export const useMeteoriteVelocityVectorControl = () => {
  const dispatch = useDispatch()

  const velocityVector = useSelector(selectMeteoriteVelocityVector)

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    isPointerDown = true
    pointerScreenX = e.screenX
  }

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    isPointerDown = false
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown) return

    const angle = Math.sign(pointerScreenX - e.screenX) * 0.05
    const newVector = getVectorFromAngelAndVector(angle, velocityVector)

    dispatch(
      setMeteoriteData({
        velocityVectorX: newVector.x,
        velocityVectorY: newVector.y,
      }),
    )
  }

  return {
    onPointerDown,
    onPointerUp,
    onPointerMove,
  }
}
