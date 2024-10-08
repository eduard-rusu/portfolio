import './App.css'
import Navbar from './components/Navbar'
import ContactUsForm from './components/ContactUsForm'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import { useEffect, useState } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import ContactUsPage from './components/ContactUsPage'
import AboutMePage from './components/AboutMePage'


function ScrollWatcher() {
  const navigate = useNavigate();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrolledVh = currentScrollPos / viewportHeight;

    if (scrolledVh < 1 && window.location.pathname !== '/') {
      navigate('/');
    } else if (scrolledVh >= 1 && scrolledVh < 2 && window.location.pathname !== '/Services') {
      navigate('/Services');
    } else if (scrolledVh >= 2 && scrolledVh < 3 && window.location.pathname !== '/ContactMe') {
      navigate('/ContactMe');
    } else if (scrolledVh >= 3 && scrolledVh < 4 && window.location.pathname !== '/AboutMe') {
      navigate('/AboutMe');
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return null
}


function App() {
  return (
    <BrowserRouter>
      <ScrollWatcher/>
      <Navbar/>
      <div>
        <HomePage/>
        <ServicesPage/>
        <ContactUsPage/>
        <AboutMePage/>
      </div>
    </BrowserRouter>
  )
}

export default App
