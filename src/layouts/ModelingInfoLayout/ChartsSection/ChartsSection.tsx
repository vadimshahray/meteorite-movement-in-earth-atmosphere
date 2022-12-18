import StackedLineChartIcon from '@mui/icons-material/StackedLineChart'
import { Item, Section } from 'components'
import { ActiveChart } from './Charts'
import { ChartsToggler } from './ChartsToggler'

export const ChartsSection = () => {
  return (
    <Section title='Графики' Icon={StackedLineChartIcon}>
      <Item label='Активный график'>
        <ChartsToggler />
      </Item>

      <ActiveChart />
    </Section>
  )
}
