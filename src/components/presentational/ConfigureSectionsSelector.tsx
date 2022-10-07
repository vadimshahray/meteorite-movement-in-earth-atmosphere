import { SectionsSelector } from 'components'

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
  const sections: string[] = ['🧊 Объект', '🪐 Планета', '☁️ Атмосфера']

  return (
    <SectionsSelector
      sections={sections}
      activeIndex={activeIndex}
      onActiveChange={onActiveChange}
    />
  )
}
