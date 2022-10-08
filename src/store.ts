import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  themeSlice,
  planetSlice,
  subjectSlice,
  atmosphereSlice,
  configurationSlice,
} from 'slices'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  configuration: configurationSlice.reducer,
  subject: subjectSlice.reducer,
  planet: planetSlice.reducer,
  atmosphere: atmosphereSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

/** Конфигурация Redux-хранилища приложения */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
