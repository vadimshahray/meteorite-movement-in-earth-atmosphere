import { ConfigureLayout, ModelingLayout, PlayerLayout } from 'layouts'
import React from 'react'

/**
 * Блок разметки главной страницы приложения
 * @returns {JSX.Element}
 */
export const MainLayout = () => {
  return (
    <>
      <ModelingLayout />
      <ConfigureLayout />
      <PlayerLayout />
    </>
  )
}
