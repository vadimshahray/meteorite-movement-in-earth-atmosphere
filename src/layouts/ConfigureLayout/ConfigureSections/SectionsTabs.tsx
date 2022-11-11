import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsUserSectionInputValid } from 'selectors'

export type SectionsTabsProps = {
  onActiveTabChange: (value: number) => void
}

export const SectionsTabs = ({
  onActiveTabChange: onActiveTabChanged,
}: SectionsTabsProps) => {
  const isUserInputValid = useSelector(selectIsUserSectionInputValid)

  const [activeTab, setActiveTab] = useState('0')

  const handleChange = (_: any, newActiveTab: number) => {
    setActiveTab(newActiveTab.toString())
    onActiveTabChanged(newActiveTab)
  }

  return (
    <Tabs
      value={isUserInputValid ? activeTab : false}
      onChange={handleChange}
      variant='fullWidth'
    >
      <Tab label='Объект' value='0' disabled={!isUserInputValid} />
      <Tab label='Планета' value='1' disabled={!isUserInputValid} />
      <Tab label='Атмосфера' value='2' disabled={!isUserInputValid} />
    </Tabs>
  )
}
