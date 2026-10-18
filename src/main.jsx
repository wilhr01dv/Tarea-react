import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RegisterApp } from './RegisterApp'
import Contador from './Contador'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contador />
  </StrictMode>,
)
