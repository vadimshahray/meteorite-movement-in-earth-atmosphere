import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  themeSlice,
  sceneSlice,
  modelingSlice,
  meteoriteSlice,
  modelingInfoSlice,
  configurationSlice,
  feedbackSlice,
} from '@slices'
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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'feedback', 'meteorite', 'configuration'],
}

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  scene: sceneSlice.reducer,
  feedback: feedbackSlice.reducer,
  modeling: modelingSlice.reducer,
  meteorite: meteoriteSlice.reducer,
  modelingInfo: modelingInfoSlice.reducer,
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
