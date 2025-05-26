import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { registerCoreModules } from '_di/registers/registerCoreModules'
import { BrowserRouter } from 'react-router-dom'

registerCoreModules()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
