import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '@/pages/home.jsx'
import "react"
import { BrowserRouter, Route, Routes } from 'react-router'
import Root from '@/components/root'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Root />} >
          <Route index element={<Home /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
