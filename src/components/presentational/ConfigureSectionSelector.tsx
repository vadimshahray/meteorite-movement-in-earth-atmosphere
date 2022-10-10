import { Selector, SelectorItem } from 'components'

const sections: SelectorItem<number>[] = [
  {
    key: 0,
    name: '🧊 Объект',
  },
  {
    key: 1,
    name: '🪐 Планета',
  },
  {
    key: 2,
    name: '☁️ Атмосфера',
  },
]

/** Пропсы селектора секций конфигурации */
export type ConfigureSectionsSelectorProps = {
  /** Индекс активной секции */
  activeIndex: number
  /** Обработчик активации секции */
  onActiveChange: (index: number) => void
}

/** Селектор секций конфигурации */
export const ConfigureSectionsSelector = ({
  activeIndex,
  onActiveChange,
}: ConfigureSectionsSelectorProps) => {
  return (
    <Selector
      items={sections}
      activeItemKey={activeIndex}
      onActiveChange={onActiveChange}
    />
  )
}
