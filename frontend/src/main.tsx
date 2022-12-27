import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProviderApp } from './ProviderApp'
import { UserContextProvider } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <ProviderApp renderApp={<App />} />
    </UserContextProvider>
  </React.StrictMode>
)
