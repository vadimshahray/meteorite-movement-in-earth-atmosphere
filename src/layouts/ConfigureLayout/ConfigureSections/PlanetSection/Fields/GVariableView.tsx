import Notes from '@mui/icons-material/Notes'
import ShortText from '@mui/icons-material/ShortText'
import { VariableView, VariableViewItem } from 'components'
import { useSelector } from 'react-redux'
import { selectPlanetgActive } from 'selectors'

export const GVariableView = () => {
  const gActive = useSelector(selectPlanetgActive)
  console.log(gActive.toString())

  return (
    <VariableView
      label='Ускорение свободного падения'
      activeName={gActive.toString()}
    >
      <VariableViewItem
        name='short'
        component={<div>short</div>}
        iconComponent={ShortText}
      />
      <VariableViewItem
        name='detailed'
        component={<div>detailed</div>}
        iconComponent={Notes}
      />
    </VariableView>
  )
}
