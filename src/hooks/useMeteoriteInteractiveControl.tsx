import { ThreeEvent } from '@react-three/fiber'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { selectInteractiveControlValue, selectMeteoriteData } from 'selectors'
import { setMeteoriteData } from 'slices'
import { useDispatch } from './useDispatch'

export const useMeteoriteInteractiveControl = (
  meteoriteProperty: keyof MeteoriteInteractiveControls,
  withAltKey: boolean = false,
) => {
  const dispatch = useDispatch()

  const propertyValue = useSelector(selectMeteoriteData(meteoriteProperty))
  const controlValue = useSelector(
    selectInteractiveControlValue(meteoriteProperty),
  )

  const onWheel = useCallback(
    ({ deltaY, altKey }: ThreeEvent<WheelEvent>) => {
      if ((withAltKey && !altKey) || (!withAltKey && altKey)) return

      const newValue = propertyValue + Math.sign(deltaY) * controlValue

      if (newValue > 0) {
        dispatch(
          setMeteoriteData({
            [meteoriteProperty]: newValue,
          }),
        )
      }
    },
    [meteoriteProperty, withAltKey, propertyValue, controlValue, dispatch],
  )

  return {
    onWheel,
  }
}
