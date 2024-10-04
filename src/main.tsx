import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/Navbar.tsx'
import ContactUsForm from './components/ContactUsForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar></Navbar>
    <App />
    <ContactUsForm></ContactUsForm>
  </StrictMode>,
)
