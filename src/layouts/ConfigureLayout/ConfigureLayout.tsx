import { FullContainer } from 'components'
import { useToolbar } from 'hooks'
import React, { useEffect } from 'react'
import { styleClasses } from 'utils'
import { ConfigureForm } from './ConfigureForm'
import styles from './configureLayout.module.css'

/**
 * Блок, содержащий все, что связано с настройкой физических моделей (поля ввода данных и т.п.)
 * @returns {JSX.Element}
 */
export const ConfigureLayout = ({ className, ...props }: LayoutProps) => {
  const { setTitle } = useToolbar()

  useEffect(() => {
    setTitle('Настройки приложения')
  }, [setTitle])

  return (
    <FullContainer
      className={styleClasses(styles.layout, className)}
      {...props}
    >
      <ConfigureForm />
    </FullContainer>
  )
}
