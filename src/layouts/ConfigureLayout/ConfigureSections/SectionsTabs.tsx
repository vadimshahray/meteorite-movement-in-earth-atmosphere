import { Tab, Tabs } from '@mui/material'
import { useDispatch } from 'hooks'
import { sections } from 'models'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectActiveSection, selectIsUserSectionInputValid } from 'selectors'
import { setActiveSection } from 'slices'

export type SectionsTabsProps = {
  onActiveTabChange: (value: number) => void
}

export const SectionsTabs = ({
  onActiveTabChange: onActiveTabChanged,
}: SectionsTabsProps) => {
  const dispatch = useDispatch()

  const isUserInputValid = useSelector(selectIsUserSectionInputValid)
  const activeSection = useSelector(selectActiveSection)

  const activeTab = sections.findIndex((s) => s.key === activeSection)

  const handleChange = (value: any, index: number) => {
    dispatch(setActiveSection(sections[index].key))
    onActiveTabChanged(index)
  }

  return (
    <Tabs
      value={isUserInputValid ? activeTab : false}
      onChange={handleChange}
      variant='fullWidth'
    >
      {sections.map((s, i) => (
        <Tab
          key={s.key}
          label={s.name}
          value={i}
          disabled={!isUserInputValid}
        />
      ))}
    </Tabs>
  )
}
