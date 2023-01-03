import React from 'react'
import { MainPage } from 'pages'
import ReactDOM from 'react-dom/client'
import {
  ThemeProvider,
  StoreProvider,
  DialogProvider,
  PersistProvider,
  SnackbarProvider,
} from 'providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StoreProvider>
      <PersistProvider>
        <ThemeProvider>
          <SnackbarProvider>
            <DialogProvider>
              <MainPage />
            </DialogProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistProvider>
    </StoreProvider>
  </React.StrictMode>,
)
