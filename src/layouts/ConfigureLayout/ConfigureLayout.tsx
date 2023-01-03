import { useEffect } from 'react'
import { useToolbar } from '@hooks'
import { MeteoriteSection } from './MeteoriteSection'
import { SettingsOutlined } from '@mui/icons-material'
import { InteractiveControlsSection } from './InteractiveControlsSection'
import { Container, ProjectDocumentButton, ThemeButton } from '@components'

/**
 * Блок, содержащий все, что связано с настройкой физических моделей (поля ввода данных и т.п.)
 * @returns {JSX.Element}
 */
export const ConfigureLayout = () => {
  const { setTitle, setIcon, setActionButtons } = useToolbar()

  useEffect(() => {
    setTitle('Настройки приложения')
    setIcon(SettingsOutlined)
    setActionButtons([<ProjectDocumentButton />, <ThemeButton />])

    return () => {
      setActionButtons(undefined)
    }
  }, [setTitle, setIcon, setActionButtons])

  return (
    <Container disableGutters sx={{ overflowY: 'auto' }}>
      <Container disableGuttersV>
        <MeteoriteSection />

        <InteractiveControlsSection />
      </Container>
    </Container>
  )
}
