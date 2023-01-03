import { useDispatch } from '@hooks'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { setMeteoriteData } from '@slices'
import { isNumberBetweenMinMax } from '@utils'
import { METEORITE_LIMITS } from '@constants'
import {
  selectModelingStatus,
  selectMeteoriteDistance,
  selectInteractiveControlValue,
} from '@selectors'

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
