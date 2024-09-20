import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Reg from './Reg.jsx'
import Auth from './Auth.jsx'
import Cabinet from './Cabinet.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabinet />
  </StrictMode>,
)
