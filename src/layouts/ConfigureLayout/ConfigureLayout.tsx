import { FullContainer } from 'components'
import React from 'react'
import { styleClasses } from 'utils'
import { ConfigureContent } from './ConfigureContent'
import styles from './configureLayout.module.css'
import { ConfigureToolbar } from './ConfigureToolbar'

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
      <ConfigureToolbar />
      <ConfigureContent />
    </FullContainer>
  )
}
