/** Базовый тип экшенов */
type PayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never,
> = import('@reduxjs/toolkit').PayloadAction<P, T, M, E>

/** Базовый тип слайсов */
type SliceCaseReducers<T> = import('@reduxjs/toolkit').SliceCaseReducers<T>
