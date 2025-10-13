import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navegacao from './route'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
  </StrictMode>,
)
