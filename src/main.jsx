import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoffeeMachineState from './store/CoffeeMachineState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeeMachineState>
      <App />
    </CoffeeMachineState>
  </StrictMode>,
)
