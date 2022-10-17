import { RollbackButton } from 'components/presentational/RollbackButton'
import { connect } from 'react-redux'
import { setDefaultPlanetData } from 'slices'

const mapDispatch = {
  onClick: setDefaultPlanetData,
}

/** Компонент-обертка кнопки-сброс введённых данных планеты */
export const PlanetRollbackButtonContainer = connect(
  null,
  mapDispatch,
)(RollbackButton)
