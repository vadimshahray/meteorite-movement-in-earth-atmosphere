import React from 'react'
import { MainPage } from '@pages'
import ReactDOM from 'react-dom/client'
import {
  ThemeProvider,
  StoreProvider,
  PersistProvider,
  SnackbarProvider,
} from '@providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StoreProvider>
      <PersistProvider>
        <ThemeProvider>
          <SnackbarProvider>
            <MainPage />
          </SnackbarProvider>
        </ThemeProvider>
      </PersistProvider>
    </StoreProvider>
  </React.StrictMode>,
)
