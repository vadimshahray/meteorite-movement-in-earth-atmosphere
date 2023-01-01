import { METEORITE_LIMITS } from 'consts'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  selectInteractiveControlValue,
  selectMeteoriteDistance,
  selectModelingStatus,
} from 'selectors'
import { setMeteoriteData } from 'slices'
import { isNumberBetweenMinMax } from 'utils'
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

      if (
        isNumberBetweenMinMax(
          newDistance,
          METEORITE_LIMITS.DISTANCE_MIN,
          METEORITE_LIMITS.DISTANCE_MAX,
        )
      ) {
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
