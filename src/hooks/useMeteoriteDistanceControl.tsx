import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  selectInteractiveControlValue,
  selectMeteoriteDistance,
} from 'selectors'
import { setMeteoriteData } from 'slices'
import { useDispatch } from './useDispatch'

export const useMeteoriteDistanceControl = () => {
  const dispatch = useDispatch()

  const distance = useSelector(selectMeteoriteDistance)
  const distanceControl = useSelector(selectInteractiveControlValue('distance'))

  const onWheel = useCallback(
    ({ deltaY, altKey }: Pick<WheelEvent, 'deltaY' | 'altKey'>) => {
      if (!altKey) return

      const newDistance = distance + Math.sign(deltaY) * distanceControl

      if (newDistance > 0) {
        dispatch(
          setMeteoriteData({
            distance: newDistance,
          }),
        )
      }
    },
    [distance, distanceControl, dispatch],
  )

  return {
    onWheel,
  }
}
