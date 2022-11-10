import { Tab, Tabs } from '@mui/material'
import { Container, TabPanel } from 'components'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsUserSectionInputValid } from 'selectors'
import { AtmosphereSection } from './AtmosphereSection'
import { PlanetSection } from './PlanetSection'
import { SectionsTabs } from './SectionsTabs'
import { SubjectSection } from './SubjectSection'

/** Секции конфигурации */
export const ConfigureSections = () => {
  const [activeTabPanel, setActiveTabPanel] = useState('0')

  const handleActiveTabChange = (tab: number) => {
    setActiveTabPanel(tab.toString())
  }

  return (
    <Container disableGutters>
      <SectionsTabs onActiveTabChange={handleActiveTabChange} />

      <Container>
        <TabPanel value={activeTabPanel} index='0'>
          <SubjectSection />
        </TabPanel>
        <TabPanel value={activeTabPanel} index='1'>
          <PlanetSection />
        </TabPanel>
        <TabPanel value={activeTabPanel} index='2'>
          <AtmosphereSection />
        </TabPanel>
      </Container>
    </Container>
  )
}
