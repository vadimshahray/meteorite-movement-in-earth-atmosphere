import { configureStore } from '@reduxjs/toolkit'
import { configurationSlice, themeSlice } from 'slices'

/** Конфигурация Redux-хранилища приложения */
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    configuration: configurationSlice.reducer,
  },
})
