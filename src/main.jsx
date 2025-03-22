import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "react"
import VVRoutes from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VVRoutes />
  </StrictMode>,
)
