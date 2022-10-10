import { PlanetTemplateSelector } from 'components/presentational/PlanetTemplateSelector'
import { connect } from 'react-redux'
import { selectActivePlanetTemplate, selectPlanetTemplates } from 'selectors'
import { setActivePlanetTemplate } from 'slices'

const mapState = (state: RootState) => {
  return {
    templates: selectPlanetTemplates(state),
    activeTemplate: selectActivePlanetTemplate(state),
  }
}

const mapDispatch = {
  onActiveChange: setActivePlanetTemplate,
}

export const PlanetTemplateSelectorContainer = connect(
  mapState,
  mapDispatch,
)(PlanetTemplateSelector<keyof PlanetTemplates>)
