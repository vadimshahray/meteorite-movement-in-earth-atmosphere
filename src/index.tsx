import {
  DialogProvider,
  PersistProvider,
  ThemeProvider,
  SnackbarProvider,
} from 'providers'
import { StoreProvider } from 'providers/StoreProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StoreProvider>
      <PersistProvider>
        <ThemeProvider>
          <SnackbarProvider>
            <DialogProvider>
              <App />
            </DialogProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistProvider>
    </StoreProvider>
  </React.StrictMode>,
)
