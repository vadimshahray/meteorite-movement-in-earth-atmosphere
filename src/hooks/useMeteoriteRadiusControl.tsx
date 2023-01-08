import { useDispatch } from '@hooks'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { setMeteoriteData } from '@slices'
import { METEORITE_LIMITS } from '@constants'
import {
  selectModelingStatus,
  selectMeteoriteRadius,
  selectInteractiveControlValue,
} from '@selectors'

export const useMeteoriteRadiusControl = () => {
  const dispatch = useDispatch()

  const modelingStatus = useSelector(selectModelingStatus)

  const radius = useSelector(selectMeteoriteRadius)
  const radiusControl = useSelector(
    selectInteractiveControlValue('@MeteoriteRadiusControl'),
  )

  const onWheel = useCallback(
    ({ deltaY, altKey }: Pick<WheelEvent, 'deltaY' | 'altKey'>) => {
      if (altKey) return

      const value = radius + Math.sign(deltaY) * radiusControl
      const newRadius =
        deltaY > 0
          ? Math.min(value, METEORITE_LIMITS.RADIUS_MAX)
          : Math.max(value, METEORITE_LIMITS.RADIUS_MIN)

      dispatch(
        setMeteoriteData({
          radius: newRadius,
        }),
      )
    },
    [radius, radiusControl, dispatch],
  )

  return {
    onWheel: modelingStatus === 'idle' ? onWheel : undefined,
  }
}
