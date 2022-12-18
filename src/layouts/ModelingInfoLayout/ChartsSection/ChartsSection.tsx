import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined'
import { Item, Section } from 'components'
import { ActiveChart } from './Charts'
import { ChartsToggler } from './ChartsToggler'

export const ChartsSection = () => {
  return (
    <Section title='Графики' Icon={ShowChartOutlinedIcon}>
      <Item label='Активный график'>
        <ChartsToggler />
      </Item>

      <ActiveChart />
    </Section>
  )
}
