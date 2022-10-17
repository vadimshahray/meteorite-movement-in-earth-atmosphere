import {
  PlanetRollbackButtonContainer,
  VariableView,
  VariableViewItem,
} from 'components'

/** Секция конфигурации "Планета" */
export const PlanetSection = () => {
  return (
    <div>
      <PlanetRollbackButtonContainer />
      <VariableView activeName='1'>
        <VariableViewItem name='1' component={<div>245</div>} />
        <VariableViewItem name='3' component={<div>123</div>} />
      </VariableView>
    </div>
  )
}
