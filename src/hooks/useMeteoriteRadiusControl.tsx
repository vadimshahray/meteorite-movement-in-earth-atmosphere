import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectInteractiveControlValue, selectMeteoriteRadius } from 'selectors'
import { setMeteoriteData } from 'slices'
import { useDispatch } from './useDispatch'

export const useMeteoriteRadiusControl = () => {
  const dispatch = useDispatch()

  const radius = useSelector(selectMeteoriteRadius)
  const radiusControl = useSelector(
    selectInteractiveControlValue('@MeteoriteRadiusControl'),
  )

  const onWheel = useCallback(
    ({ deltaY, altKey }: Pick<WheelEvent, 'deltaY' | 'altKey'>) => {
      if (altKey) return

      const newRadius = radius + Math.sign(deltaY) * radiusControl

      if (newRadius > 0) {
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
    onWheel,
  }
}
