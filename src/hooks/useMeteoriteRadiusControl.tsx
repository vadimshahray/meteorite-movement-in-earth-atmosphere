import { useDispatch } from 'hooks'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { METEORITE_LIMITS } from 'consts'
import { setMeteoriteData } from 'slices'
import { isNumberBetweenMinMax } from 'utils'
import {
  selectModelingStatus,
  selectMeteoriteRadius,
  selectInteractiveControlValue,
} from 'selectors'

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

      const newRadius = radius + Math.sign(deltaY) * radiusControl

      if (
        isNumberBetweenMinMax(
          newRadius,
          METEORITE_LIMITS.RADIUS_MIN,
          METEORITE_LIMITS.RADIUS_MAX,
        )
      ) {
        dispatch(
          setMeteoriteData({
            radius: newRadius,
          }),
        )
      }
    },
    [radius, radiusControl, dispatch],
  )

  return {
    onWheel: modelingStatus === 'idle' ? onWheel : undefined,
  }
}
