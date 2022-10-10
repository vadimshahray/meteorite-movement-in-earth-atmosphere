import { bindActionCreators } from '@reduxjs/toolkit'
import { ConfigureSectionsSelector } from 'components/presentational/ConfigureSectionSelector'
import { connect } from 'react-redux'
import { setActiveSection } from 'slices'

const mapState = (state: RootState) => {
  return {
    activeIndex: state.configuration.activeSection,
  }
}

const mapDispatch = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      onActiveChange: (index: number) => setActiveSection(index),
    },
    dispatch,
  )

/** Компонент-обертка селектора секций конфигурации */
export const ConfigureSectionsSelectorContainer = connect(
  mapState,
  mapDispatch,
)(ConfigureSectionsSelector)
