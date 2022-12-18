import { Toggler, TogglerItem } from 'components'
import { useState } from 'react'

type Charts = '@VelocityChart' | '@DistanceChart'

const charts: TogglerItem[] = [
  { key: '@VelocityChart', name: 'Скорость' },
  { key: '@DistanceChart', name: 'Расстояние' },
]

export const ChartsToggler = () => {
  const [activeChart, setActiveChart] = useState<Charts>('@VelocityChart')

  const handleChange = (activeChart: string) => {
    setActiveChart(activeChart as Charts)
  }

  return <Toggler value={activeChart} items={charts} onChange={handleChange} />
}
