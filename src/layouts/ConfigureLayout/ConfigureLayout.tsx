import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Container } from 'components'
import { useToolbar } from 'hooks'
import React, { useEffect } from 'react'
import { styleClasses } from 'utils'
import styles from './configureLayout.module.css'
import { ConfigureSections } from './ConfigureSections'

/**
 * Блок, содержащий все, что связано с настройкой физических моделей (поля ввода данных и т.п.)
 * @returns {JSX.Element}
 */
export const ConfigureLayout = ({ className, ...props }: LayoutProps) => {
  const { setTitle, setIcon } = useToolbar()

  useEffect(() => {
    setTitle('Настройки приложения')
    setIcon(SettingsOutlinedIcon)
  }, [setTitle, setIcon])

  return (
    <Container
      disableGutters
      className={styleClasses(styles.layout, className)}
      {...props}
    >
      <ConfigureSections />
    </Container>
  )
}
