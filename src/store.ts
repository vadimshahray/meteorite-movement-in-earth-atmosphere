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
import { themeSlice, configurationSlice, objectSlice } from 'slices'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['configuration'],
}

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  object: objectSlice.reducer,
  configuration: configurationSlice.reducer,
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
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
