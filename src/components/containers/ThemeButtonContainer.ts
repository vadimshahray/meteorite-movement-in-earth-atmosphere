import { ThemeButton } from 'components/presentational'
import { connect } from 'react-redux'
import { selectThemeColorMode } from 'selectors'
import { setColorMode } from 'slices'

const mapState = (state: RootState) => {
  return {
    colorMode: selectThemeColorMode(state),
  }
}
const mapDispatch = {
  onChange: setColorMode,
}

/** Компонент-обертка кнопки-переключателя темы приложения */
export const ThemeButtonContainer = connect(mapState, mapDispatch)(ThemeButton)
