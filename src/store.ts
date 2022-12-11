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
import { themeSlice, configurationSlice, objectSlice, sceneSlice } from 'slices'
import { modelingSlice } from 'slices/modeling.slice'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['configuration', 'modeling'],
}

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  object: objectSlice.reducer,
  configuration: configurationSlice.reducer,
  modeling: modelingSlice.reducer,
  scene: sceneSlice.reducer,
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
