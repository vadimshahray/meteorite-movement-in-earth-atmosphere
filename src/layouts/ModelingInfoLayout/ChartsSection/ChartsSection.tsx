import { ActiveChart } from './Charts'
import { Item, Section } from 'components'
import { ChartsToggler } from './ChartsToggler'
import { ShowChartOutlined } from '@mui/icons-material'

export const ChartsSection = () => {
  return (
    <Section title='Графики' Icon={ShowChartOutlined} collapsible>
      <Item label='Активный график'>
        <ChartsToggler />
      </Item>

      <ActiveChart />
    </Section>
  )
}
