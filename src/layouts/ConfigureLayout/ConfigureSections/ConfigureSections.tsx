import { Tab, Tabs } from '@mui/material'
import { Container, TabPanel } from 'components'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsUserSectionInputValid } from 'selectors'
import { AtmosphereSection } from './AtmosphereSection'
import { PlanetSection } from './PlanetSection'
import { SubjectSection } from './SubjectSection'

/** Секции конфигурации */
export const ConfigureSections = () => {
  const isUserInputValid = useSelector(selectIsUserSectionInputValid)

  const [activeTab, setActiveTab] = useState('0')

  const handleChange = (_: any, newActiveTab: number) => {
    setActiveTab(newActiveTab.toString())
  }

  return (
    <Container disableGutters>
      <Container disableGutters>
        <Tabs value={activeTab} onChange={handleChange} variant='fullWidth'>
          <Tab label='Объект' value='0' disabled={isUserInputValid} />
          <Tab label='Планета' value='1' disabled={isUserInputValid} />
          <Tab label='Атмосфера' value='2' disabled={isUserInputValid} />
        </Tabs>
      </Container>

      <TabPanel value={activeTab} index='0'>
        <SubjectSection />
      </TabPanel>
      <TabPanel value={activeTab} index='1'>
        <PlanetSection />
      </TabPanel>
      <TabPanel value={activeTab} index='2'>
        <AtmosphereSection />
      </TabPanel>
    </Container>
  )
}
