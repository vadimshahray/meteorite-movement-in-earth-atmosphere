import { configureStore } from '@reduxjs/toolkit'
import {
  atmosphereSlice,
  configurationSlice,
  planetSlice,
  subjectSlice,
  themeSlice,
} from 'slices'

/** Конфигурация Redux-хранилища приложения */
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    configuration: configurationSlice.reducer,
    subject: subjectSlice.reducer,
    planet: planetSlice.reducer,
    atmosphere: atmosphereSlice.reducer,
  },
})
