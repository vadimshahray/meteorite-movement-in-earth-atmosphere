/** Состояние Redux-хранилища приложения */
type RootState = ReturnType<typeof import('src/store').store.getState>

/** Диспетчер Redux-хранилища приложения */
type AppDispatch = typeof import('src/store').store.dispatch
