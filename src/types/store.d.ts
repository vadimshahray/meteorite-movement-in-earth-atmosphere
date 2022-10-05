/** Состояние Redux-хранилища приложения */
type RootState = ReturnType<typeof import('store').store.getState>

/** Диспетчер Redux-хранилища приложения */
type AppDispatch = typeof import('store').store.dispatch
