import { FullContainer } from 'components'
import { ConfigureToolbarProvider } from 'providers'
import React from 'react'
import { styleClasses } from 'utils'
import { ConfigureForm } from './ConfigureForm'
import styles from './configureLayout.module.css'

/**
 * Блок, содержащий все, что связано с настройкой физических моделей (поля ввода данных и т.п.)
 * @returns {JSX.Element}
 */
export const ConfigureLayout = ({ className, ...props }: LayoutProps) => {
  return (
    <FullContainer
      className={styleClasses(styles.layout, className)}
      {...props}
    >
      <ConfigureToolbarProvider>
        <ConfigureForm />
      </ConfigureToolbarProvider>
    </FullContainer>
  )
}
