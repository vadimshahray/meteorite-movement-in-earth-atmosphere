interface TabPanelProps {
  /** Индекс панели */
  index: string
  /** Индекс активной панели */
  value: string
  children?: React.ReactNode
}

/** Таб панель, выступающая в роли контейнера содержимого таба */
export const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div role='tabpanel' hidden={value !== index} id={index}>
      {value === index && children}
    </div>
  )
}
