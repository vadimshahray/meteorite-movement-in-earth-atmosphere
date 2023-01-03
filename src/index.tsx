import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
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
              <App />
            </DialogProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistProvider>
    </StoreProvider>
  </React.StrictMode>,
)
