import Notes from '@mui/icons-material/Notes'
import ShortText from '@mui/icons-material/ShortText'
import { VariableView, VariableViewItem } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlanetgActive } from 'selectors'
import { setPlanetData } from 'slices'
import { GDetailedView } from './GDetailedView'
import { GShortView } from './GShortView'

export const GVariableView = () => {
  const dispatch = useDispatch<AppDispatch>()

  const gActive = useSelector(selectPlanetgActive)

  const handleChange = (activeView: string) => {
    const active: 'short' | 'detailed' =
      activeView === 'short' ? 'short' : 'detailed'

    dispatch(
      setPlanetData({
        g: {
          active,
        },
      }),
    )
  }

  return (
    <VariableView
      label='Ускорение свободного падения'
      activeName={gActive.toString()}
      onActiveChange={handleChange}
    >
      <VariableViewItem
        name='short'
        component={<GShortView />}
        iconComponent={ShortText}
      />
      <VariableViewItem
        name='detailed'
        component={<GDetailedView />}
        iconComponent={Notes}
      />
    </VariableView>
  )
}
