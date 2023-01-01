import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  selectInteractiveControlValue,
  selectMeteoriteDistance,
  selectModelingStatus,
} from 'selectors'
import { setMeteoriteData } from 'slices'
import { useDispatch } from './useDispatch'

export const useMeteoriteDistanceControl = () => {
  const dispatch = useDispatch()

  const modelingStatus = useSelector(selectModelingStatus)

  const distance = useSelector(selectMeteoriteDistance)
  const distanceControl = useSelector(
    selectInteractiveControlValue('@MeteoriteDistanceControl'),
  )

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
    onWheel: modelingStatus === 'idle' ? onWheel : undefined,
  }
}
