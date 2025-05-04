import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "react"
import VVRoutes from './routes'
import axios from 'axios'
axios.defaults.withCredentials = true;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VVRoutes />
  </StrictMode>,
)
